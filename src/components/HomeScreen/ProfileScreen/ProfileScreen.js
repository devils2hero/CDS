import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Alert,
  TextInput
} from "react-native";
import { Icon, SearchBar, TabBar } from "@ant-design/react-native";
import DatePicker from "react-native-datepicker";
export default class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <ImageBackground
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center"
            }}
            source={require("../../../assets/images/cover.png")}
          >
            <Text style={{ fontSize: 20, padding: 10, color: "#FFFFFF" }}>
              Thông tin cá nhân
            </Text>
            <Image
              style={styles.avatar}
              source={require("../../../assets/images/avatarprofile.png")}
            />
          </ImageBackground>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <View
              style={{
                flexDirection: "column",
                width: "100%",
                alignSelf: "center"
              }}
            >
              <View style={styles.contentInfomation}>
                <Text
                  style={{
                    width: "30%",
                    height: 50,
                    textAlign: "left",
                    textAlignVertical: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#727C8E"
                  }}
                >
                  Tên
                </Text>
                <TouchableOpacity style={{ width: "70%", height: 50 }}>
                  <Text
                    style={{
                      width: "70%",
                      height: 50,
                      textAlign: "left",
                      textAlignVertical: "center",
                      color: "#727C8E",
                      fontWeight: "normal",
                      fontSize: 15
                    }}
                  >
                    Trần Đức Hùng
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.contentInfomation}>
                <Text
                  style={{
                    width: "30%",
                    height: 50,
                    textAlign: "left",
                    textAlignVertical: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#727C8E"
                  }}
                >
                  Biệt danh
                </Text>
                <TouchableOpacity style={{ width: "70%", height: 50 }}>
                  <Text
                    style={{
                      width: "70%",
                      height: 50,
                      textAlign: "left",
                      textAlignVertical: "center",
                      color: "#727C8E",
                      fontWeight: "normal",
                      fontSize: 15
                    }}
                  >
                    Red Fire
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.contentInfomation}>
                <Text
                  style={{
                    width: "30%",
                    height: 50,
                    textAlign: "left",
                    textAlignVertical: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#727C8E"
                  }}
                >
                  Ngày sinh
                </Text>
                <TouchableOpacity style={{ width: "70%", height: 50 }}>
                  <Text
                    style={{
                      width: "70%",
                      height: 50,
                      textAlign: "left",
                      textAlignVertical: "center",
                      color: "#727C8E",
                      fontWeight: "normal",
                      fontSize: 15
                    }}
                  >
                    15/10/1995
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.contentInfomation}>
                <Text
                  style={{
                    width: "30%",
                    height: 50,
                    textAlign: "left",
                    textAlignVertical: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#727C8E"
                  }}
                >
                  Giới tính
                </Text>
                <TouchableOpacity style={{ width: "70%", height: 50 }}>
                  <Text
                    style={{
                      width: "70%",
                      height: 50,
                      textAlign: "left",
                      textAlignVertical: "center",
                      color: "#727C8E",
                      fontWeight: "normal",
                      fontSize: 15
                    }}
                  >
                    Nam
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.contentInfomation}>
                <Text
                  style={{
                    width: "30%",
                    height: 50,
                    textAlign: "left",
                    textAlignVertical: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#727C8E"
                  }}
                >
                  Email
                </Text>
                <Text
                  style={{
                    textAlignVertical: "center",
                    width: "100%",
                    textAlign: "left",
                    color: "#727C8E",
                    fontWeight: "normal",
                    fontSize: 15,
                    height: 50
                  }}
                >
                  duchung.1510@gmail.com
                </Text>
              </View>
              <View style={styles.contentInfomation}>
                <Text
                  style={{
                    width: "30%",
                    height: 50,
                    textAlign: "left",
                    textAlignVertical: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#727C8E"
                  }}
                >
                  Địa chỉ
                </Text>
                <Text
                  style={{
                    textAlignVertical: "center",
                    width: "100%",
                    textAlign: "left",
                    color: "#727C8E",
                    fontWeight: "normal",
                    fontSize: 15
                  }}
                >
                  Số nhà 09, tổ dân phố 18, Đức...
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  height: 100,
                  alignItems: "center",
                  alignSelf: "center"
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#DEDEDE",
                    width: 120,
                    height: 40,
                    margin: 20,
                    borderRadius: 30
                  }}
                >
                  <Text
                    style={{
                      color: "#727C8E",
                      alignSelf: "center",
                      fontSize: 15,
                      textAlign: "center",
                      margin: 10,
                      textAlignVertical: "center"
                    }}
                  >
                    BỎ QUA
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FF9800",
                    width: 120,
                    height: 40,
                    margin: 20,
                    borderRadius: 30,
                    textAlignVertical: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      alignSelf: "center",
                      fontSize: 15,
                      textAlign: "center",
                      margin: 10,
                      textAlignVertical: "center"
                    }}
                  >
                    HOÀN TẤT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 200,
    alignItems: "center",
    flexDirection: "row"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white"
    // marginBottom: 10
    // alignSelf: "center",
    // position: "absolute",
    // alignItems: "center"
  },
  body: {
    width: "100%"
  },
  bodyContent: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center"
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  },
  textInputModal: {
    height: 40,
    flex: 1,
    color: "#727C8E",
    fontSize: 15,
    borderRadius: 10,
    borderColor: "#CCC",
    borderWidth: 1
  },
  contentTextInputModal: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 280,
    height: 40,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  contentInfomation: {
    paddingLeft: 25,
    flexDirection: "row",
    borderBottomColor: "#DEDEDE",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: "#DEDEDE",
    width: "100%"
  }
});
