import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
  Platform,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Button,
  YellowBox
} from "react-native";
import flatListData from "./dataFlatListDetailCategory";
import ActionSheet from "react-native-actionsheet";
const options = ["Thoát", "Chinh phục", "Luyện tập", "Bonus"];
class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: props.item.backgroundColor
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          padding: 10
        }}
      >
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.84,
            elevation: 5,
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: this.state.backgroundColor
          }}
        />

        <Text style={{ fontSize: 17, marginTop: 5 }}>
          {this.props.item.name}
        </Text>
      </View>
    );
  }
}
export default class DetailCategory extends Component {
  constructor() {
    super();
    YellowBox.ignoreWarnings([
      "Warning: isMounted(...) is deprecated",
      "Module RCTImageLoader"
    ]);
  }
  showActionSheet = () => {
    this.ActionSheet.show();
  };
  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === "ios" ? 34 : 0 }}>
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
            <Text style={{ marginLeft: 25, fontSize: 20 }}>
              Kiến thức cơ bản
            </Text>
          </View>
          <View
            style={{
              width: "25%",
              flexDirection: "row",
              alignItems: "center",
              alignContent: "flex-end"
            }}
          >
            <Text style={{ marginRight: 5, fontSize: 20, color: "#515C6F" }}>
              1200
            </Text>
            <Image
              style={{
                width: 20.87,
                height: 20,
                marginRight: 15
              }}
              source={require("../../../assets/images/sao.png")}
            />
          </View>
        </View>
        <View
          style={{
            height: 100,
            flexDirection: "column",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.25,
            shadowRadius: 2,
            elevation: 5
          }}
        >
          <View
            style={{
              height: 0.3,
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 0.3 },
              elevation: 0.5
            }}
          />
          <View style={{ flexDirection: "row", height: 80 }}>
            <View style={{ width: "50%", height: 80, paddingLeft: 25 }}>
              <View
                style={{
                  flexDirection: "column",
                  height: "100%",
                  marginTop: 5
                }}
              >
                <Text style={{ color: "#039BE5", fontSize: 18 }}>
                  Chủ đề: Màu sắc
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ height: 25, width: 25, margin: 5 }}
                    source={require("../../../assets/images/icon1.png")}
                  />
                  <Image
                    style={{ height: 25, width: 25, margin: 5 }}
                    source={require("../../../assets/images/icon1.png")}
                  />
                  <Image
                    style={{ height: 25, width: 25, margin: 5 }}
                    source={require("../../../assets/images/final.png")}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: "50%",
                backgroundColor: "#FFF",
                height: "100%",
                alignSelf: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 180,
                  backgroundColor: "#FF9800",
                  alignSelf: "center",
                  borderRadius: 20,
                  alignItems: "center",
                  marginTop: 20,
                  flexDirection: "row"
                }}
                onPress={this.showActionSheet}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#FFFFFF",
                    textAlign: "center",
                    textAlignVertical: "center",
                    height: "100%",
                    width: "80%",
                    marginLeft: 10,
                    alignSelf: "center"
                  }}
                >
                  Làm bài
                </Text>

                <Image
                  style={{
                    width: 15,
                    height: 15,
                    justifyContent: "flex-end"
                  }}
                  source={require("../../../assets/images/iconright.png")}
                />
              </TouchableOpacity>
              <ActionSheet
                ref={o => (this.ActionSheet = o)}
                title={
                  <Text style={{ color: "#000", fontSize: 20 }}>
                    Bé hãy chọn phương pháp làm bài?
                  </Text>
                }
                options={options}
                cancelButtonIndex={0}
                destructiveButtonIndex={4}
                onPress={index => {
                  /* do something */
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              height: 20,
              justifyContent: "flex-end"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#FF6969",
                fontSize: 15,
                marginBottom: 5
              }}
            >
              Hoàn thành phần thi Bonus để nhân ngay 20 sao!
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.84,
            shadowRadius: 2,
            elevation: 5
          }}
        />

        <FlatList
          data={flatListData}
          numColumns={3}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
        />
      </View>
    );
  }
}
