import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Button,
  Image,
  Alert,
  ImageBackground
} from "react-native";
import ButtonSubmit from "./ButtonSubmit";
import FormLogin from "./FormLogin";
import Logo from "./Logo";
import TextRegister from "./TextRegister";
import FotgotPasswordText from "./FotgotPasswordText";
import TextBottom from "./TextBottom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <View>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/images/backgroundlogin.png")}
        >
          <View style={styles.containerLogin}>
            <Logo />
            <FormLogin />
            <View style={{ flexDirection: "row" }}>
              <FotgotPasswordText />
            </View>
            <ButtonSubmit />
            <TextRegister />
          </View>
          <TextBottom />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
