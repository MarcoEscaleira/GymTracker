import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import { RouteNavigation } from "../../types";

export const Home: FC<RouteNavigation> = ({ navigation }) => {
  const tailwind = useTailwind();

  return (
    <View>
      <Text style={tailwind("pt-12 text-red-800")}>Home</Text>

      <TouchableOpacity
        style={tailwind("pt-8")}
        onPress={() => navigation.navigate("Login")}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
