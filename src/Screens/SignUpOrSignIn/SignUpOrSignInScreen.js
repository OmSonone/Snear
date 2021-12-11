import React from "react";
import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { windowHeight, windowWidth } from "../../utilities/DeviceDimensions";

import { Colors } from "../../constants/colors/Colors";
import { scaledSize } from "../../utilities/Utilities";
import LargeButton from "../../components/buttons/LargeButton";
import { config } from "./config.js";

export default function SignUpOrSignInScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/BackgroundImages/unsplash_QnMeRW36-zY.png")}
        style={styles.imageBackgroundViewStyles}
      >
        <LinearGradient
          colors={["transparent", Colors.primary]}
          style={styles.gradient}
        >
          {/* <Text>SNEAR</Text> */}
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Some random text to insert</Text>
            <Text style={styles.subHeaderText}>
              I can chase you and I can catch you, but there is nothing I can do
              to make you mine
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <SafeAreaView style={styles.container}>
        <LargeButton
          name={config.signUpButtonText}
          bgColor={Colors.primaryAccent}
          fontColor={config.signUpButtonTextColor}
          fontSize={config.signUpButtonFontSize}
          onPress={() => navigation.navigate("SignUp")}
          style={styles.buttonStyles}
        />
        <LargeButton
          name={config.continueWithGoogleText}
          fontSize={config.continueWithGoogleFontSize}
          fontColor={config.continueWithGoogleTextColor}
          bgColor={Colors.transparent}
          imageUrl={config.googleImgUrlProp}
          fontColor={Colors.white}
          onPress={() => navigation.navigate("SignIn")}
          style={styles.buttonStyles}
        />
        <LargeButton
          name={config.continueWithAppleText}
          fontSize={config.continueWithAppleFontSize}
          fontColor={config.continueWithAppleTextColor}
          bgColor={Colors.transparent}
          imageUrl={config.appleImgUrlProp}
          fontColor={Colors.white}
          onPress={() => navigation.navigate("SignIn")}
          style={styles.buttonStyles}
        />
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ marginTop: scaledSize(40), color: Colors.white }}>
            Login
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
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
  buttonStyles: {
    // backgroundColor: bgColor,
    borderColor: Colors.primaryAccent,
    borderWidth: 0.5,
    borderRadius: scaledSize(30),
    padding: scaledSize(10),
    margin: scaledSize(10),
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.9,
    height: windowHeight * 0.06,
    flexDirection: "row",
  },
  textContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flex: 1,
    flexDirection: "column",
    marginHorizontal: scaledSize(20),
  },
  headerText: { color: Colors.white, fontSize: 32, fontWeight: "bold" },
  subHeaderText: {
    color: Colors.white,
    fontSize: 16,
    marginTop: scaledSize(20),
  },
});
