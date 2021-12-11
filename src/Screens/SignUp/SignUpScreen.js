import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ImageBackground, StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import LargeButton from "../../components/buttons/LargeButton";
import LoginInputs from "../../components/TextInputs/LoginInputs";
import { Colors } from "../../constants/colors/Colors";
import { windowHeight } from "../../utilities/DeviceDimensions";
import { scaledSize } from "../../utilities/Utilities";
import { config } from "./config.js";



export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      contentContainerStyle={styles.keyboardAwareScrollViewStyles}
    >
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/BackgroundImages/unsplash_QnMeRW36-zY.png")}
        style={styles.imageBackgroundViewStyles}
      >
        <LinearGradient
          colors={["transparent", Colors.primary]}
          style={styles.gradient}
        >
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Sign Up</Text>
            <Text style={styles.subHeaderText}>
              Welcome to Tunify, which will make accompany your mood for music.
              Let’s create account now
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <SafeAreaView style={styles.container}>
        <View style={styles.loginInputContainer}>
          <LoginInputs
            isPassword={false}
            iconName={"face"}
            label={"Full Name"}
            placeholder={"Enter your full name"}
            onChangeText={(email) => setEmail(email)}
            autoCorrect={false}
            autoCompleteType={"name"}
            keyboardType={"default"}
          />
          <LoginInputs
            isPassword={false}
            iconName={"email"}
            label={"Email"}
            onChangeText={(email) => setEmail(email)}
            autoCapitalize={"none"}
            autoCorrect={false}
            autoCompleteType={"email"}
            keyboardType={"email-address"}
          />
          <LoginInputs
            isPassword={true}
            eyeIcon={showPassword ? "visibility" : "visibility-off"}
            showPassword={showPassword}
            iconName={"lock"}
            label={"Password"}
            onChangeText={(password) => setPassword(password)}
            onEyePress={() => setShowPassword(!showPassword)}
            autoCapitalize={"none"}
            autoCorrect={false}
            autoCompleteType={"off"}
            keyboardType={"default"}
          />
          <LoginInputs
            isPassword={true}
            eyeIcon={showConfirmPassword ? "visibility" : "visibility-off"}
            showPassword={showConfirmPassword}
            iconName={"lock"}
            label={"Confirm Password"}
            onChangeText={(password) => setConfirmPassword(password)}
            onEyePress={() => setShowConfirmPassword(!showConfirmPassword)}
            autoCapitalize={"none"}
            autoCorrect={false}
            autoCompleteType={"off"}
            keyboardType={"default"}
          />

          <View
            style={{
              marginTop: scaledSize(10),
            }}
          >
            <LargeButton
              name={config.signInButtonText}
              bgColor={Colors.primaryAccent}
              fontColor={config.signInButtonTextColor}
              fontSize={config.signInButtonFontSize}
              onPress={() => console.log("Pressed")}
              style={styles.signInButton}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: scaledSize(10) }}>
            <Text style={{ color: Colors.white }}>You have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={{ color: Colors.primaryAccent }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  keyboardAwareScrollViewStyles: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.primary,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageBackgroundViewStyles: { width: "100%", height: scaledSize(418) },
  gradient: {
    // width: "100%",
    height: "100%",
  },
  loginInputContainer: {
    width: "100%",
    marginTop: scaledSize(-120),
    // marginBottom: scaledSize(30),
    flex: 1,
    flexDirection: "column",
    paddingBottom: scaledSize(30),
    paddingTop: scaledSize(10),
    paddingHorizontal: scaledSize(20),
    justifyContent: "flex-start",
    alignItems: "center",
    //styles for top border
    borderTopColor: Colors.primaryAccent,
    borderTopWidth: 3,
    borderTopStartRadius: scaledSize(30),
    borderTopEndRadius: scaledSize(30),
    //styles for left and right border
    borderLeftWidth: 0.3,
    borderLeftColor: Colors.primaryAccent,
    borderRightWidth: 0.3,
    borderRightColor: Colors.primaryAccent,
  },
  scrollViewContentContaner: {},
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    flexDirection: "column",
    marginHorizontal: scaledSize(20),
    marginTop: scaledSize(240),
  },
  headerText: { color: Colors.white, fontSize: 32, fontWeight: "bold" },
  subHeaderText: {
    color: Colors.white,
    fontSize: 16,
    marginTop: scaledSize(20),
  },
  forgotPasswordContainer: {
    width: "90%",
    // flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    // margin: scaledSize(20),
    // backgroundColor: Colors.white,
  },
  forgotPasswordText: {
    color: Colors.primaryAccent,
    fontSize: 16,
  },
  signInButton: {
    // backgroundColor: bgColor,
    borderColor: Colors.primaryAccent,
    borderWidth: 0.5,
    borderRadius: scaledSize(30),
    padding: scaledSize(10),
    // margin: scaledSize(20),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: windowHeight * 0.06,
    flexDirection: "row",
  },
});
