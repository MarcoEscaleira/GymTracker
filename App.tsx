import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { Home, Login } from "./src/views";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{
              title: "Home",
            }}>
            {(props) => <Home {...props} />}
          </Stack.Screen>

          <Stack.Screen name="Login" options={{ title: "Login" }}>
            {(props) => <Login {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
