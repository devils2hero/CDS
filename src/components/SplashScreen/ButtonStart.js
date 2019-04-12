import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Button,
  Alert,
  Text
} from "react-native";
export default class ButtonStart extends Component {
  constructor() {
    super();
  }
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed" + viewId);
  };
  render() {
    return (
      <View>
        <TouchableHighlight
          style={{
            marginTop: 100,
            height: 40,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            width: 200,
            borderRadius: 30,
            backgroundColor: "#FF9800"
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: 15,
              fontWeight: "normal"
            }}
          >
            BẮT ĐẦU
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
