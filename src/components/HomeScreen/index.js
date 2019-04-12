import React, { Component } from "react";
import { Text, View } from "react-native";
import { Icon, SearchBar, TabBar, Badge } from "@ant-design/react-native";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import QuestionScreen from "./QuestionScreen";
import TabBarItem from "@ant-design/react-native/lib/tab-bar/TabBarItem";

export default class CDS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab"
    };
  }
  renderContent(page) {
    switch (page) {
      case "HomeScreen":
        return <HomeScreen />;
        break;
      case "ProfileScreen":
        return <ProfileScreen />;
        break;
      case "QuestionScreen":
        return <QuestionScreen />;
        break;
      default:
        return <HomeScreen />;
        break;
    }
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#fc1b02"
        barTintColor="#FFFFFF"
      >
        <TabBar.Item
          icon={<Icon name="home" style={{ marginTop: 10 }} />}
          selected={this.state.selectedTab === "blueTab"}
          onPress={() => this.onChangeTab("blueTab")}
        >
          {this.renderContent("HomeScreen")}
        </TabBar.Item>

        <TabBar.Item
          icon={<Icon name="question-circle" style={{ marginTop: 10 }} />}
          selected={this.state.selectedTab === "redTab"}
          onPress={() => this.onChangeTab("redTab")}
        >
          {this.renderContent("QuestionScreen")}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="profile" style={{ marginTop: 10 }} />}
          selected={this.state.selectedTab === "greenTab"}
          onPress={() => this.onChangeTab("greenTab")}
        >
          {this.renderContent("ProfileScreen")}
        </TabBar.Item>
      </TabBar>
    );
  }
}
