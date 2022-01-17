import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export function TrackHabit({ navigation: Props }) {
  let habit = "doing some dumb shit";
  const [dayCount, updateCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Button title="Down Bad" onPress={downBad}></Button>
      <Text>You done</Text>
      <Text>{habit}</Text>
      <Text> {dayCount} times today</Text>
    </View>
  );

  function downBad() {
    let currentTime = Date.now();
    updateCount(dayCount + 1);
    console.log(` -1 down bad`);
    console.log(`current time ${JSON.stringify(currentTime)}`);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
