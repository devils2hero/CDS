import React, { Component } from "react";
import { View, Text, TouchableHighlight, Alert } from "react-native";

export default class TextRegister extends Component {
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed" + viewId);
  };
  render() {
    return (
      <View>
        <TouchableHighlight
          style={{
            height: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => this.onClickListener("register")}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 15 }}>
            Bạn chưa có tài khoản? ĐĂNG KÝ
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
