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
  Dimensions
} from "react-native";
import flastListData from "./dataFlatListCategory";
class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: props.item.backgroundColor
    };
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            marginBottom: 20,
            borderRadius: 20,
            alignSelf: "center",
            width: 360,
            height: 120,
            flexDirection: "row",
            backgroundColor: this.state.backgroundColor
          }}
        >
          <Image
            style={{ width: 360, height: 120 }}
            source={require("../../../assets/images/hoavan.png")}
          />

          <Image
            backgroundColor="#FFF"
            style={{
              width: 70,
              height: 70,
              marginLeft: 15,
              borderRadius: 70,
              position: "absolute",
              alignSelf: "center"
            }}
          />
          <View
            style={{
              marginLeft: 100,
              flex: 1,
              flexDirection: "column",
              alignSelf: "center",
              alignContent: "center",
              justifyContent: "center",
              margin: 20,
              position: "absolute"
            }}
          >
            <Text style={{ color: "white", fontSize: 18, marginBottom: 5 }}>
              {this.props.item.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#FFFFFF",
                  borderBottomLeftRadius: 15,
                  borderTopLeftRadius: 15,
                  marginRight: 5,
                  paddingTop: 3,
                  paddingBottom: 3,
                  paddingLeft: 5,
                  paddingRight: 5
                }}
              >
                <Text
                  style={{ color: "#515C6F", fontSize: 14, marginRight: 3 }}
                >
                  {this.props.item.sosao}
                </Text>
                <Image
                  style={{
                    width: 10,
                    height: 10,
                    alignSelf: "center"
                  }}
                  source={require("../../../assets/images/sao.png")}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#FFFFFF",
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                  paddingTop: 3,
                  paddingBottom: 3,
                  paddingLeft: 5,
                  paddingRight: 5,
                  backgroundColor: "#FFEB8A"
                }}
              >
                <Text
                  style={{
                    color: "#515C6F",
                    fontSize: 14,
                    marginRight: 3
                  }}
                >
                  {this.props.item.defaultstar}
                </Text>
                <Image
                  style={{
                    width: 10,
                    height: 10,
                    alignSelf: "center"
                  }}
                  source={require("../../../assets/images/sao.png")}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 1, backgroundColor: "white" }} />
      </View>
    );
  }
}
export default class CategoryQuestion extends Component {
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
              Danh sách lĩnh vực
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
        <FlatList
          data={flastListData}
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
