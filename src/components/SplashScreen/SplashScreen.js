import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import Logo from "../LoginScreen/Logo";
import Slogan from "../SplashScreen/Slogan";
import ButtonStart from "./ButtonStart";
import TextBottom from "../LoginScreen/TextBottom";
export default class SplashScreen extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/images/backgroundlogin.png")}
        >
          <View style={styles.bodySplashScreen}>
            <Logo />
            <Slogan />
            <ButtonStart />
          </View>
          <TextBottom />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bodySplashScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
