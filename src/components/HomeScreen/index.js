import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Icon, SearchBar, TabBar, Badge } from "@ant-design/react-native";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import QuestionScreen from "./QuestionScreen";
import CategoryQuestion from "./CategoryQuestionScreen/CategoryQuestion";
import DetailCategory from "./DetailCategoryScreen/DetailCategory";
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
      case "CategoryQuestion":
        return <CategoryQuestion />;
        break;
      case "ProfileScreen":
        return <ProfileScreen />;
        break;
      case "DetailCategory":
        return <DetailCategory />;
        break;
      default:
        return <CategoryQuestion />;
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
          {this.renderContent("QuestionScreen")}
        </TabBar.Item>

        <TabBar.Item
          icon={<Icon name="question-circle" style={{ marginTop: 10 }} />}
          selected={this.state.selectedTab === "redTab"}
          onPress={() => this.onChangeTab("redTab")}
        >
          {this.renderContent("DetailCategory")}
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
