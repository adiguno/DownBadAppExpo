import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button } from "react-native";
import { CreateHabit } from "./CreateHabit";
import { TrackHabit } from "./TrackHabit";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ title: "Down Badd" }}
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
