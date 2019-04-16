import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  Alert,
  Platform,
  TouchableHighlight
} from "react-native";
import { Icon, SearchBar, TabBar } from "@ant-design/react-native";
import flastListData from "../../data/flastListData";
import AddModal from "./QuestionScreen/AddModal";

import Swipeout from "react-native-swipeout";
class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Luu lai key
      actionRowKey: null
    };
  }
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.actionRowKey != null) {
          this.setState({ activeRowkey: null });
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowkey: this.props.item.key });
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.actionRowKey;
            Alert.alert("Alert", "Are you sure you want to delete?", [
              {
                text: "No",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "Yes",
                onPress: () => {
                  //Splice Xoa 1 doi tuong
                  flastListData.splice(this.props.index, 1);
                  //Refresh
                  this.props.parentFlatList.refreshFlatList(deletingRow);
                }
              }
            ]);
          },
          text: "Delete",
          type: "delete"
        }
      ],
      rowId: this.props.index,
      selectionId: 1
    };
    return (
      <Swipeout {...swipeSettings}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor:
                this.props.index % 2 == 0 ? "mediumseagreen" : "tomato"
            }}
          >
            <Image
              source={{ uri: this.props.item.imageUrl }}
              style={{ width: 100, height: 100, margin: 5 }}
            />
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ color: "white", padding: 10, fontSize: 16 }}>
                {this.props.item.name}
              </Text>
              <Text style={{ color: "white", padding: 10, fontSize: 16 }}>
                {this.props.item.foodDescription}
              </Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: "white" }} />
        </View>
      </Swipeout>
    );
  }
}
export default class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteRowKey: null
    };
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  refreshFlatList = activeKey => {
    this.setState(prevState => {
      return {
        deleteRowKey: activeKey
      };
    });
    this.refs.flatList.scrollToEnd();
  };
  _onPressAdd() {
    // alert("You add Item");
    this.refs.addModal.showAddModal();
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === "ios" ? 34 : 0 }}>
        <View
          style={{
            backgroundColor: "tomato",
            height: 64,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            style={{ marginRight: 10 }}
            underlayColor="tomato"
            onPress={this._onPressAdd}
          >
            <Icon name="file-add" size="lg" />
          </TouchableHighlight>
        </View>
        <FlatList
          ref={"flatList"}
          data={flastListData}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
        />
        <AddModal ref={"addModal"} parentFlatList={this} />
      </View>
    );
  }
}
