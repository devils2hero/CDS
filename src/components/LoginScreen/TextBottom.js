import React, { Component } from "react";
import { View, Text, TouchableHighlight, Alert } from "react-native";

export default class TextBottom extends Component {
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed" + viewId);
  };
  render() {
    return (
      <View
        style={{
          height: 15,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 15 }}>
          Phát triển bởi 3HTech
        </Text>
      </View>
    );
  }
}
