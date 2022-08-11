import React, { FC } from "react";
import { Text, SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAuth } from "../../hooks/useAuth";

export const Workout: FC = () => {
  const tw = useTailwind();
  const { user } = useAuth((state) => ({
    signOut: state.signOut,
    user: state.user,
  }));

  if (!user) return null;

  return (
    <SafeAreaView style={tw("h-full justify-between items-center")}>
      <Text>Hello workout page</Text>
    </SafeAreaView>
  );
};

export default Workout;
