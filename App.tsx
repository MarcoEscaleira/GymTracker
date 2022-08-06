import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";
import { StackNavigator } from "./src/router";
import utilities from "./tailwind.json";
import useAuthProvider from "./src/hooks/useAuth";

export default function App() {
  const [initialLoading] = useAuthProvider();

  if (initialLoading) return null;

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}
