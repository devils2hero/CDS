import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  StyleSheet
} from "react-native";

export default class TextBottom extends Component {
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed" + viewId);
  };
  render() {
    return (
      <View style={styles.containerTextBottomLogin}>
        <Text style={styles.textStyleBottomLogin}>Phát triển bởi 3HTech</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerTextBottomLogin: {
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  textStyleBottomLogin: {
    color: "#FFFFFF",
    fontSize: 15
  }
});
