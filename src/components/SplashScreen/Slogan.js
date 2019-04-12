import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Slogan extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textStyleSlogan}>
          They completed the 20th century with the highest average league
          position.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textStyleSlogan: {
    marginTop: 40,
    fontSize: 15,
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    width: 252,
    height: 123,
    textAlign: "center"
  }
});
