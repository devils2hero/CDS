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
        <TouchableHighlight style={styles.buttonContainerSplashScreen}>
          <Text style={styles.textButtonSplashScreen}>BẮT ĐẦU</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainerSplashScreen: {
    marginTop: 100,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 200,
    borderRadius: 30,
    backgroundColor: "#FF9800"
  },
  textButtonSplashScreen: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    fontWeight: "normal"
  }
});
