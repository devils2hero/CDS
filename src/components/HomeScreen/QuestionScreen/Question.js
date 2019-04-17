import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, Dimensions } from "react-native";
import ProgressBarAnimated from "react-native-progress-bar-animated";
export default class Question extends Component {
  state = {
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0
  };

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value
    });
  };
  render() {
    const barWidth = Dimensions.get("screen").width - 30;
    const progressCustomStyles = {
      backgroundColor: "red",
      borderRadius: 0,
      borderColor: "orange"
    };
    return <View />;
  }
}
