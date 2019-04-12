import React, { Component } from "react";
import { View, Text, TouchableHighlight, Alert } from "react-native";

export default class TextRegister extends Component {
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed" + viewId);
  };
  render() {
    return (
      <TouchableHighlight
        style={{
          height: 20,
          flexDirection: "row",
          justifyContent: "flex-end",
          width: 270,
          marginBottom: 20
        }}
        onPress={() => this.onClickListener("restore_password")}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 15 }}>Quên mật khẩu?</Text>
      </TouchableHighlight>
    );
  }
}
