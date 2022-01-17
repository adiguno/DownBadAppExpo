import React, { Component } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

export function CreateHabit({ navigation }) {
  const [text, onChangeText] = React.useState(
    "Tell me why ain't nothin' but a heartache"
  );

  const [isSubmitted, onSubmit] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text>Why ya down bad bro?</Text>
      <TextInput
        onFocus={clearText}
        onSubmitEditing={submitHabit}
        onChangeText={onChangeText}
        value={text}
      />

      <CheckMark></CheckMark>
    </View>
  );

  function CheckMark() {
    if (isSubmitted) {
      return (
        <TouchableOpacity onPress={goToNext} style={styles.roundButton1}>
          <View>
            <Image
              source={require("./assets/checkmark.png")}
              resizeMode="contain"
              style={styles.checkmark}
            />
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  }

  function goToNext() {
    console.log(`goToNext text: ${text}`);
    navigation.navigate("Tracking");
  }
  function clearText() {
    onChangeText("");
  }
  function submitHabit() {
    onSubmit(true);
    console.log(`submitHabit text: ${text}`);
    console.log("Submit somethinthing");
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
