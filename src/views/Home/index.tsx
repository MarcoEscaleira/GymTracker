import React, { FC } from "react";
import { Text, SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAuth } from "../../hooks/useAuth";

export const Home: FC = () => {
  const tw = useTailwind();
  const { user } = useAuth((state) => ({
    signOut: state.signOut,
    user: state.user,
  }));

  if (!user) return null;

  return (
    <SafeAreaView style={tw("h-full justify-between items-center")}>
      <Text>Hello home page2</Text>
    </SafeAreaView>
  );
};

export default Home;
