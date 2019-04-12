import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Button,
  Alert,
  Text
} from "react-native";
export default class ButtonSubmit extends Component {
  constructor() {
    super();
  }
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed" + viewId);
  };
  render() {
    return (
      <View>
        <TouchableHighlight style={styles.submitLogin}>
          <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 15 }}>
            ĐĂNG NHẬP
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submitLogin: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 200,
    borderRadius: 30,
    backgroundColor: "#FF9800"
  }
});
