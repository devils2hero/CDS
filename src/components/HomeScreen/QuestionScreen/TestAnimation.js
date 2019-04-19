import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  UIManager,
  findNodeHandle,
  Animated,
  Dimensions
} from "react-native";
var { width, height } = Dimensions.get("window");

export default class TestAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measurements: {},
      fadeValue: new Animated.Value(0),
      //   xValue: new Animated.Value(10),
      //   xValue2: new Animated.Value(50),
      springValue: new Animated.Value(0.5)
    };
    this.moveAnimation = new Animated.ValueXY({ x: 0, y: 0 });
  }

  measure() {
    this.view.measure((x, y, width, height) => {
      this.setState({
        measurements: {
          x,
          y,
          width,
          height
        }
      });
    });
  }
  _moveBall = () => {
    Animated.spring(this.moveAnimation, {
      toValue: { x: width / 2 - 50, y: height / 2 - 50 }
    }).start();
  };

  _fadeAnimation = () => {
    // alert("Press Fade!");
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1200 //1000 miliseconds = 1 second
    }).start();
  };
  _moveAnimation = () => {
    // Animated.timing(this.state.xValue, {
    //   //   toValue: width - 100,
    //   toValue: 100,
    //   duration: 1000,
    //   easing: Easing.cubic
    //   //   easing: Easing.back()
    //   // easing: Easing.cubic,
    // }).start(() => {
    //   //Call after finish this animation !
    //   Animated.timing(this.state.xValue2, {
    //     toValue: width - 100,
    //     duration: 1000,
    //     // easing: Easing.linear,
    //     easing: Easing.back(),
    //     delay: 1000 //run after 1 seconds
    //   }).start(() => {
    //     this._moveAnimation();
    //   });
    // });
  };
  _springAnimation = () => {
    Animated.spring(this.state.springValue, {
      toValue: 1.5,
      friction: 1
    }).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.measure}
          ref={ref => (this.view = ref)}
          onLayout={({ nativeEvent }) => {
            this.setState({
              measurements: nativeEvent.layout
            });
          }}
        >
          <Text>Measure Me</Text>
        </View>
        <TouchableOpacity onPress={() => this.measure()}>
          <Text>Measure With UIManager</Text>
        </TouchableOpacity>
        <View>
          <Text>Width: {this.state.measurements.width}</Text>
          <Text>Height: {this.state.measurements.height}</Text>
          <Text>X: {this.state.measurements.x}</Text>
          <Text>Y: {this.state.measurements.y}</Text>
        </View>
      </View>
      //   <View style={styles.container}>
      //     {/* <Animated.View style={[styles.animationView,
      //       // {opacity: this.state.fadeValue}
      //       { left: this.state.xValue }
      //     ]}>
      //     </Animated.View> */}
      //     <Animated.View
      //       style={[styles.tennisBall, this.moveAnimation.getLayout()]}
      //     >
      //       <TouchableWithoutFeedback
      //         style={styles.button}
      //         onPress={this._moveBall}
      //       >
      //         <Text style={styles.buttonText}>Press</Text>
      //       </TouchableWithoutFeedback>
      //     </Animated.View>
      //   </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ecf0f1"
//   },
//   tennisBall: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "greenyellow",
//     borderRadius: 100,
//     width: 100,
//     height: 100
//   },
//   button: {
//     paddingTop: 24,
//     paddingBottom: 24
//   },
//   buttonText: {
//     fontSize: 24,
//     color: "#333"
//   }
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  measure: {
    padding: 30,
    borderWidth: 1
  }
});
