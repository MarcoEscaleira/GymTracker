import React, { FC } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useTailwind } from "tailwind-rn";
import { RouteNavigation } from "../../types";
import { useAuth } from "../../hooks/useAuth";

export const Home: FC<RouteNavigation> = ({ navigation }) => {
  const tw = useTailwind();
  const { signOut, user } = useAuth((state) => ({
    signOut: state.signOut,
    user: state.user,
  }));

  if (!user) return null;

  return (
    <SafeAreaView style={tw("h-full justify-between items-center")}>
      <View style={tw("items-center")}>
        <Image
          style={tw("h-10 w-10 rounded-full")}
          source={{ uri: user.photoURL }}
        />
      </View>

      <TouchableOpacity
        style={tw("w-3/6 border rounded-lg p-3 border-red-500 items-center")}
        onPress={signOut}>
        <Text style={tw("text-red-500")}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
