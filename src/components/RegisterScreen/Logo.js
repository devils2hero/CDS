import React, { Component } from "react";
import { View, Image } from "react-native";
export default class Logo extends Component {
  render() {
    return (
      <View
        style={{
          marginBottom: 20,
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: 248, height: 154.3 }}
          source={require("../../assets/images/logocds.png")}
        />
      </View>
    );
  }
}
