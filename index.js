/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import CDS from "./src/components/HomeScreen/index";
import Login from "./src/components/LoginScreen/Login";
import Register from "./src/components/RegisterScreen/Register";
import SplashScreen from "./src/components/SplashScreen/SplashScreen";
import { name as appName } from "./app.json";
AppRegistry.registerComponent(appName, () => Register);
