import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Button,
  Alert,
  Text
} from "react-native";
export default class ButtonRegister extends Component {
  constructor() {
    super();
  }
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed" + viewId);
  };
  render() {
    return (
      <View>
        <TouchableHighlight style={styles.containerButtonRegister}>
          <Text style={styles.textStyleRegister}>ĐĂNG KÝ TÀI KHOẢN</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerButtonRegister: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 200,
    borderRadius: 30,
    backgroundColor: "#FF9800"
  },
  textStyleRegister: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15
  }
});
