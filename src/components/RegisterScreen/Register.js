import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import Logo from "./Logo";
import FormRegister from "./FormRegister";
import ButtonRegister from "./ButtonRegister";
import TextBottom from "../LoginScreen/TextBottom";
export default class Register extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/images/backgroundlogin.png")}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Logo />
            <FormRegister />
            <ButtonRegister />
          </View>
          <TextBottom />
        </ImageBackground>
      </View>
    );
  }
}
