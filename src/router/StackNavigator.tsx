import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Home, Profile, Workout } from "../views";
import { useAuth } from "../hooks/useAuth";

const Tab = createBottomTabNavigator();

export const StackNavigator = () => {
  const user = useAuth((state) => state.user);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: user ? "flex" : "none",
        },
      }}>
      {user && (
        <>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Workout"
            component={Workout}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="weight-lifter" size={size} color={color} />
              ),
            }}
          />
        </>
      )}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigator;
