import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
export default class Logo extends Component {
  render() {
    return (
      <View style={styles.containerLogoLogin}>
        <Image
          style={styles.imageSizeLogoLogin}
          source={require("../../assets/images/logocds.png")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerLogoLogin: {
    marginBottom: 20,
    alignItems: "center"
  },
  imageSizeLogoLogin: {
    width: 248,
    height: 154.3
  }
});
