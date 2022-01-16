import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CreateHabit } from "./CreateHabit";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CreateHabit} />
      </Stack.Navigator>
    </NavigationContainer>
    // <CreateHabit></CreateHabit>
  );
}
