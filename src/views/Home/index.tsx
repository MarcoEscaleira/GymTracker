import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { RouteNavigation } from "../../types";

export const Home: FC<RouteNavigation> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default Home;
