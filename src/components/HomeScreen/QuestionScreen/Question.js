import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import ProgressBarAnimated from "react-native-progress-bar-animated";
export default class Question extends Component {
  state = {
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0
  };

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value
    });
  };
  render() {
    const barWidth = Dimensions.get("screen").width - 30;
    const progressCustomStyles = {
      backgroundColor: "red",
      borderRadius: 0,
      borderColor: "orange"
    };
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            height: 64,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: "75%",
              flexDirection: "row"
            }}
          >
            <Text style={{ marginLeft: 15, fontSize: 20, color: "#515C6F" }}>
              Chinh phục
            </Text>
          </View>
          <View
            style={{
              width: "25%",
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "flex-end"
            }}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 20
              }}
              source={require("../../../assets/images/iconexit.png")}
            />
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignSelf: "flex-start",
              marginBottom: 10,
              marginLeft: 15
            }}
          >
            <Image
              style={{ width: 23.33, height: 21, marginRight: 5 }}
              source={require("../../../assets/images/iconheart.png")}
            />
            <Image
              style={{ width: 23.33, height: 21, marginRight: 5 }}
              source={require("../../../assets/images/iconheart.png")}
            />
            <Image
              style={{ width: 23.33, height: 21 }}
              source={require("../../../assets/images/iconheart.png")}
            />
          </View>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            backgroundColorOnComplete="#6CC644"
          />
          <Image
            style={{
              height: 28.75,
              width: 30,
              justifyContent: "flex-start",
              alignSelf: "flex-start",
              marginTop: 10,
              marginLeft: 15
            }}
            source={require("../../../assets/images/mute.png")}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#515C6F",
              justifyContent: "flex-start",
              alignSelf: "flex-start",
              marginTop: 10,
              marginLeft: 15
            }}
          >
            Chọn đáp án đúng
          </Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignSelf: "flex-start",
              marginTop: 10,
              marginLeft: 15
            }}
          >
            <Text style={{ fontSize: 15, color: "#515C6F" }}>
              Quả táo khi chín màu gì?
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
              backgroundColor: "#FFF",
              width: 178,
              height: 178,
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.84,
              elevation: 5
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              padding: 15,
              marginTop: 20
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#039BE5",
                width: "50%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                marginRight: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.84,
                elevation: 5
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#FFFFFF"
                  }}
                >
                  A.
                </Text>
                <Text style={{ fontSize: 15, color: "#FFFFFF" }}> Màu đỏ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                width: "50%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.84,
                elevation: 5
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#515C6F"
                  }}
                >
                  B.
                </Text>
                <Text style={{ fontSize: 15, color: "#515C6F" }}>Màu xanh</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              padding: 15
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                width: "50%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                marginRight: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.84,
                elevation: 5
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#515C6F"
                  }}
                >
                  C.
                </Text>
                <Text style={{ fontSize: 15, color: "#515C6F" }}> Màu đen</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                width: "50%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.84,
                elevation: 5
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#515C6F"
                  }}
                >
                  D.
                </Text>
                <Text style={{ fontSize: 15, color: "#515C6F" }}>Màu nâu</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              width: "100%",
              backgroundColor: "#FFF",
              height: 1,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.84,
              elevation: 2
            }}
          />

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignContent: "center",

              margin: 50
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: "#DEDEDE",
                width: 150,
                height: 40,
                alignItems: "center",
                alignSelf: "center",
                alignContent: "center",
                marginRight: 10
              }}
            >
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 20,
                  textAlignVertical: "center",
                  textAlign: "center",
                  alignSelf: "center",
                  alignContent: "center"
                }}
              >
                BỎ QUA
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: "#FF9800",
                width: 150,
                height: 40,
                alignItems: "center",
                alignSelf: "center",
                alignContent: "center"
              }}
              onPress={this.increase.bind(this, "progress", 20)}
            >
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 20,
                  textAlignVertical: "center",
                  textAlign: "center",
                  alignSelf: "center",
                  alignContent: "center",
                  color: "#FFF"
                }}
              >
                KIỂM TRA
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  buttonContainer: {
    marginTop: 15
  },
  separator: {
    marginVertical: 30,
    borderWidth: 0.5,
    borderColor: "#DCDCDC"
  },
  label: {
    color: "#999",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10
  }
});
