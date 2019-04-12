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
          style={styles.containerTextRegister}
          onPress={() => this.onClickListener("register")}
        >
          <Text style={styles.textStyleRegister}>
            Bạn chưa có tài khoản? ĐĂNG KÝ
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerTextRegister: {
    height: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyleRegister: {
    color: "#FFFFFF",
    fontSize: 15
  }
});
