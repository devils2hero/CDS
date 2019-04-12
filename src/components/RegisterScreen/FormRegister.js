import React, { Component } from "react";
import { Text, View, TextInput, Image, Alert, StyleSheet } from "react-native";

export default class FormRegister extends Component {
  render() {
    return (
      <View>
        <View style={styles.containerFormRegister}>
          <TextInput
            style={{}}
            placeholderTextColor="#727C8E"
            placeholder="Số điện thoại"
            keyboardType="phone-pad"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 30,
            width: 280,
            height: 40,
            marginBottom: 12,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TextInput
            style={{
              height: 45,
              marginLeft: 16,
              borderBottomColor: "#FFFFFF",
              flex: 1,
              color: "#727C8E",
              fontSize: 15
            }}
            placeholderTextColor="#727C8E"
            placeholder="Mật khẩu"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.containerFormRegister}>
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="#727C8E"
            placeholder="Nhập lại mật khẩu"
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
  containerFormRegister: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 280,
    height: 40,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  textInputStyle: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
    color: "#727C8E",
    fontSize: 15
  }
});
