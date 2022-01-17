import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { CreateHabit } from "./CreateHabit";

const Stack = createNativeStackNavigator();

function TrackHabit() {
  return (
    <View>
      <Text>Tracking</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ title: "Down Badd App" }}
      >
        <Stack.Screen
          name="Home"
          component={CreateHabit}
          // options={{ title: "Down Bad App" }}
        />
        <Stack.Screen name="Tracking" component={TrackHabit} />
      </Stack.Navigator>
    </NavigationContainer>
    // <CreateHabit></CreateHabit>
  );
}
