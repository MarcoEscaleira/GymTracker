import React, { FC } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAuth } from "../../hooks/useAuth";

export const Profile: FC = () => {
  const tw = useTailwind();
  const { request, promptGoogleLogin } = useAuth((state) => ({
    request: state.request,
    promptGoogleLogin: state.promptGoogleLogin,
  }));

  const { signOut, user } = useAuth((state) => ({
    signOut: state.signOut,
    user: state.user,
  }));

  if (!user) {
    return (
      <View style={tw("h-full items-center justify-center")}>
        <Text style={tw("text-blue-500 font-medium text-xl mb-8")}>
          Login into your account
        </Text>
        <TouchableOpacity
          onPress={async () => {
            await promptGoogleLogin();
          }}
          disabled={!request}
          style={tw("border rounded-lg p-3")}>
          <Text>Login with Google</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={tw("h-full justify-between items-center")}>
      <View style={tw("items-center")}>
        <Image
          style={tw("h-10 w-10 rounded-full")}
          source={{ uri: user.photoURL }}
        />

        <Text style={tw("mt-2")}>
          Hello, <Text style={tw("font-bold")}>{user.displayName}</Text>
        </Text>
      </View>

      <View>
        <Text style={tw("mb-2")}>Your email</Text>
        <Text style={tw("font-bold")}>{user.email}</Text>
      </View>

      <TouchableOpacity
        style={tw(
          "w-3/6 border rounded-lg p-3 border-red-500 items-center mb-3"
        )}
        onPress={signOut}>
        <Text style={tw("text-red-500")}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
