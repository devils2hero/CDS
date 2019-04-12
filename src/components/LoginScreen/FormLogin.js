import React, { Component } from "react";
import { Text, View, TextInput, Image, Alert, StyleSheet } from "react-native";

export default class FormLogin extends Component {
  render() {
    return (
      <View>
        <View style={styles.containerFormLogin}>
          <TextInput
            style={styles.textInputLoginFrom}
            placeholderTextColor="#727C8E"
            placeholder="Số điện thoại"
            keyboardType="phone-pad"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View style={styles.containerFormLogin}>
          <TextInput
            style={styles.textInputLoginFrom}
            placeholderTextColor="#727C8E"
            placeholder="Mật khẩu"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerFormLogin: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 280,
    height: 40,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  textInputLoginFrom: {
    height: 45,
    marginLeft: 16,
    flex: 1,
    color: "#727C8E",
    fontSize: 15
  }
});
