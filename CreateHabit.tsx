import React, { Component } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export function CreateHabit() {
  const [text, onChangeText] = React.useState(
    "Tell me why ain't nothin' but a heartache"
  );

  return (
    <View style={styles.container}>
      <Text>Why ya down bad bro?</Text>
      <TextInput
        onSubmitEditing={submitHabit}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );

  function submitHabit() {
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
});
