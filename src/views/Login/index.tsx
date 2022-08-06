import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RouteNavigation } from "../../types";
import { useTailwind } from "tailwind-rn";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC<RouteNavigation> = () => {
  const { request, promptGoogleLogin } = useAuth((state) => ({
    request: state.request,
    promptGoogleLogin: state.promptGoogleLogin,
  }));
  const tw = useTailwind();

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
};

export default Login;
