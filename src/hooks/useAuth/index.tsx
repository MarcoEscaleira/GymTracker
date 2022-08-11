import React, { useEffect, useState } from "react";
import create from "zustand";
import { User } from "@firebase/auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthRequestConfig } from "expo-auth-session/src/providers/Google";
import { auth } from "../../firebase";
import env from "../../config/env";

interface UserState {
  user: User | null;
  request: unknown;
  promptGoogleLogin: () => void;
  signOut: () => void;
}

export const useAuth = create<UserState>((set) => ({
  user: null,
  request: null,
  promptGoogleLogin: null,
  signOut: null,
}));

const googleConfig: Partial<GoogleAuthRequestConfig> = {
  iosClientId: env.IOS_CLIENT_ID,
  expoClientId: env.EXPO_CLIENT_ID,
  scopes: ["profile", "email"],
};

export const useAuthProvider = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [request, response, promptAsync] = Google.useAuthRequest(googleConfig);

  // Setup first time
  useEffect(() => {
    if (request) {
      useAuth.setState({
        request,
        // @ts-ignore
        promptGoogleLogin: promptAsync,
      });
    }
  }, [request]);

  // Handle response
  useEffect(() => {
    const handleResponse = async () => {
      if (response?.type === "success") {
        const {
          authentication: { idToken, accessToken },
        } = response;

        const credential = GoogleAuthProvider.credential(idToken, accessToken);

        await signInWithCredential(auth, credential);
      }
    };

    handleResponse().catch(() =>
      console.log("Something went wrong on handling google response")
    );
  }, [response]);

  // Handle user session
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          useAuth.setState({
            user,
            signOut: async () => {
              await signOut(auth);
            },
          });
        } else {
          useAuth.setState({ user: null });
        }

        setInitialLoading(false);
      }),
    []
  );

  return [initialLoading];
};

export default useAuthProvider;
