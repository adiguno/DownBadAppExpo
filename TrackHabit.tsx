import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

// this needs habit name and daily occurence?
// how to do weekly occurence?
export function TrackHabit({ navigation }) {
  let habit = "doing some dumb shit";
  const [dayCount, updateCount] = React.useState(0);

  return (
    <View style={styles.container}>
      {/* <Button title="Down Bad" onPress={downBad}></Button> */}
      <TouchableOpacity onPress={downBad} style={styles.roundButton1}>
        <View>
          <Image
            source={require("./assets/icon.png")}
            resizeMode="contain"
            style={styles.checkmark}
          />
        </View>
      </TouchableOpacity>

      <Text>You done</Text>
      <Text>{habit}</Text>
      <Text> {dayCount} times today</Text>
    </View>
  );

  function downBad() {
    const currentTime = Date.now();
    const date = new Date(currentTime);
    console.log(`current time ${date.toLocaleDateString()}`);
    console.log(`current time ${date.getHours()}`);
    console.log(`current time ${date.getMinutes()}`);

    console.log(`+1 down bad`);
    updateCount(dayCount + 1);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#8099CC",
  },
  checkmark: {
    width: 100,
    height: 100,
  },
});
