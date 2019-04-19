import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import ProgressBarAnimated from "react-native-progress-bar-animated";

export default class QuestionType2 extends Component {
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
    const barWidth = widthPercentageToDP("100%") - 30;
    return (
      <View style={styles.container}>
        <View
          style={{
            height: heightPercentageToDP("10%"),
            width: widthPercentageToDP("100%"),
            backgroundColor: "white",
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              width: widthPercentageToDP("85%"),
              fontSize: widthPercentageToDP("5%"),
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              marginLeft: 15
            }}
          >
            Chinh phục
          </Text>
          <View
            style={{
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
        <View
          style={{
            height: heightPercentageToDP("12%"),
            width: widthPercentageToDP("100%")
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: widthPercentageToDP("100%")
            }}
          >
            <Image
              style={{
                marginLeft: 15,
                width: 28,
                height: 25,
                marginRight: 10
              }}
              source={require("../../../assets/images/iconheart.png")}
            />
            <Image
              style={{
                width: 28,
                height: 25,
                marginRight: 10
              }}
              source={require("../../../assets/images/iconheart.png")}
            />
            <Image
              style={{
                width: 28,
                height: 25
              }}
              source={require("../../../assets/images/iconheart.png")}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              width: widthPercentageToDP("100%"),
              alignItems: "center"
            }}
          >
            <ProgressBarAnimated
              width={barWidth}
              value={this.state.progress}
              backgroundColorOnComplete="#6CC644"
            />
          </View>
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
        </View>
        <View
          style={{
            height: heightPercentageToDP("50%"),
            width: widthPercentageToDP("100%"),

            flexDirection: "column"
          }}
        >
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
              width: widthPercentageToDP("100%"),
              height: heightPercentageToDP("11%")
            }}
          >
            <Text
              style={{
                fontSize: widthPercentageToDP("5%"),
                color: "#515C6F",
                justifyContent: "flex-start",
                alignSelf: "flex-start",
                marginTop: 10,
                marginLeft: 15
              }}
            >
              Con gì hay gáy Ò ó o?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              width: widthPercentageToDP("100%"),
              height: heightPercentageToDP("30%"),
              marginTop: 15
            }}
          >
            <View
              style={{
                marginBottom: 15,
                marginRight: 20,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: widthPercentageToDP("100%"),
                height: heightPercentageToDP("12%")
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10
                }}
              >
                <TouchableOpacity
                  style={{
                    width: widthPercentageToDP("30%"),
                    height: heightPercentageToDP("15%"),
                    backgroundColor: "#039BE5",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.84,
                    elevation: 5
                  }}
                >
                  <Image
                    style={{
                      width: widthPercentageToDP("25%"),
                      height: heightPercentageToDP("12%")
                    }}
                    source={require("../../../assets/images/conga.png")}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#515C6F",
                    fontSize: 15
                  }}
                >
                  Con gà
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10
                }}
              >
                <TouchableOpacity
                  style={{
                    width: widthPercentageToDP("30%"),
                    height: heightPercentageToDP("15%"),
                    backgroundColor: "#FFFFFF",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.84,
                    elevation: 5
                  }}
                >
                  <Image
                    style={{
                      width: widthPercentageToDP("25%"),
                      height: heightPercentageToDP("12%")
                    }}
                    source={require("../../../assets/images/conkien.png")}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#515C6F",
                    fontSize: 15
                  }}
                >
                  Con kiến
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 40,
                marginBottom: 15,
                marginRight: 20,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: widthPercentageToDP("100%"),
                height: heightPercentageToDP("12%")
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10
                }}
              >
                <TouchableOpacity
                  style={{
                    width: widthPercentageToDP("30%"),
                    height: heightPercentageToDP("15%"),
                    backgroundColor: "#FFFFFF",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.84,
                    elevation: 5
                  }}
                >
                  <Image
                    style={{
                      width: widthPercentageToDP("25%"),
                      height: heightPercentageToDP("12%")
                    }}
                    source={require("../../../assets/images/concho.png")}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#515C6F",
                    fontSize: 15
                  }}
                >
                  Con chó
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10
                }}
              >
                <TouchableOpacity
                  style={{
                    width: widthPercentageToDP("30%"),
                    height: heightPercentageToDP("15%"),
                    backgroundColor: "#FFFFFF",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.84,
                    elevation: 5
                  }}
                >
                  <Image
                    style={{
                      width: widthPercentageToDP("25%"),
                      height: heightPercentageToDP("12%")
                    }}
                    source={require("../../../assets/images/conga.png")}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#515C6F",
                    fontSize: 15
                  }}
                >
                  Con gà
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginBottom: 15,
              marginRight: 20,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              width: widthPercentageToDP("100%"),
              height: heightPercentageToDP("6%")
            }}
          />
          <View
            style={{
              marginRight: 20,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              width: widthPercentageToDP("100%"),
              height: heightPercentageToDP("6%")
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            width: widthPercentageToDP("100%"),
            backgroundColor: "#FFF",
            height: 1,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.84,
            elevation: 2,
            flexDirection: "column"
          }}
        />
        <View
          style={{
            height: heightPercentageToDP("15%"),
            width: widthPercentageToDP("100%"),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#DEDEDE",
              width: widthPercentageToDP("45%"),
              height: heightPercentageToDP("6%"),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              margin: 5
            }}
          >
            <Text
              style={{
                fontSize: widthPercentageToDP("4%"),
                fontWeight: "bold"
              }}
            >
              THẢO LUẬN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF9800",
              width: widthPercentageToDP("45%"),
              height: heightPercentageToDP("6%"),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              margin: 5
            }}
            onPress={this.increase.bind(this, "progress", 20)}
          >
            <Text
              style={{
                fontSize: widthPercentageToDP("4%"),
                fontWeight: "bold",
                color: "#FFFFFF"
              }}
            >
              TIẾP TỤC
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
