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
import flastListData from "./dataFlatListDetailCategory";
class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: props.item.backgroundColor
    };
  }
  render() {
    return <View style={{ flex: 1, flexDirection: "column" }} />;
  }
}
export default class DetailCategory extends Component {
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
        <View
          style={{
            // backgroundColor: "#000",
            height: 100,
            flexDirection: "row",
            alignItems: "center"
          }}
        />
        {/* <FlatList
          data={flastListData}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
        /> */}
      </View>
    );
  }
}
