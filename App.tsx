import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { CreateHabit } from "./CreateHabit";

export default function App() {
  return (
    <CreateHabit></CreateHabit>

    // <View>
    //   <CreateHabit></CreateHabit>
    //   <StatusBar style="auto" />
    // </View>
    // <View>
    //   <CreateHabit></CreateHabit>
    // </View>
  );
}
