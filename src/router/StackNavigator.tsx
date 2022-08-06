import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Login } from "../views";
import { useAuth } from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const user = useAuth((state) => state.user);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <Stack.Screen name="Home">
          {(props) => <Home {...props} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Login">
          {(props) => <Login {...props} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
