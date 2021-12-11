import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import LargeButton from "../../components/buttons/LargeButton";
import LoginInputs from "../../components/TextInputs/LoginInputs";
import { Colors } from "../../constants/colors/Colors";
import { windowHeight } from "../../utilities/DeviceDimensions";
import { scaledSize } from "../../utilities/Utilities";
import { validateSignUp } from "../../validations/validations";
import { config } from "./config.js";
import { Shake } from "react-native-motion";

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [errors, setErrors] = useState({});
  const [value, setValue] = useState(0);

  const handleSignUp = () => {
    const errResult = validateSignUp({
      name,
      email,
      password,
      confirmPassword,
    });
    setErrors(errResult);
    // console.log(errors);
  };

  useEffect(() => {
    _startAnimation();
  }, [errors]);

  const _startAnimation = () => {
    setValue(value + 1);
  };

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      contentContainerStyle={styles().keyboardAwareScrollViewStyles}
    >
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/BackgroundImages/unsplash_QnMeRW36-zY.png")}
        style={styles().imageBackgroundViewStyles}
      >
        <LinearGradient
          colors={["transparent", Colors.primary]}
          style={styles().gradient}
        >
          <View style={styles().textContainer}>
            <Text style={styles().headerText}>Sign Up</Text>
            <Text style={styles().subHeaderText}>
              Welcome to Tunify, which will make accompany your mood for music.
              Let’s create account now
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <SafeAreaView style={styles().container}>
        <View style={styles().loginInputContainer}>
          <ScrollView
            style={styles().scrollViewStyles}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <LoginInputs
              isPassword={false}
              iconName={"face"}
              label={"Full Name"}
              placeholder={"Enter your full name"}
              onChangeText={(name) => setName(name)}
              autoCorrect={false}
              autoCompleteType={"name"}
              keyboardType={"default"}
              style={styles({ error: errors.name }).inputStyles}
            />
            <View style={styles().errorContainer}>
              <Shake
                // style={styles().errorContainer}
                value={value}
                type="timing"
                useNativeDriver
              >
                <Text style={styles().errorText}>{errors.name}</Text>
              </Shake>
            </View>
            <LoginInputs
              isPassword={false}
              iconName={"email"}
              label={"Email"}
              onChangeText={(email) => setEmail(email)}
              autoCapitalize={"none"}
              autoCorrect={false}
              autoCompleteType={"email"}
              keyboardType={"email-address"}
              style={styles({ error: errors.email }).inputStyles}
            />

            <View style={styles().errorContainer}>
              <Shake
                // style={styles().errorContainer}
                value={value}
                type="timing"
                useNativeDriver
              >
                <Text style={styles().errorText}>{errors.email}</Text>
              </Shake>
            </View>
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
              style={styles({ error: errors.password }).inputStyles}
            />
            <View style={styles().errorContainer}>
              <Shake
                // style={styles().errorContainer}
                value={value}
                type="timing"
                useNativeDriver
              >
                <Text style={styles().errorText}>{errors.password}</Text>
              </Shake>
            </View>
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
              style={styles({ error: errors.confirmPassword }).inputStyles}
            />
            <View style={styles().errorContainer}>
              <Shake
                // style={styles().errorContainer}
                value={value}
                type="timing"
                useNativeDriver
              >
                <Text style={styles().errorText}>{errors.confirmPassword}</Text>
              </Shake>
            </View>
          </ScrollView>
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
              onPress={() => handleSignUp()}
              style={styles().signInButton}
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

const styles = (props) =>
  StyleSheet.create({
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
    scrollViewStyles: {
      width: "100%",
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
    inputStyles: {
      backgroundColor: Colors.secondary,
      height: scaledSize(50),
      borderRadius: scaledSize(10),
      borderColor: props?.error ? Colors.error : "transparent",
      borderWidth: 1,
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
    errorContainer: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      // flex: 1,
      width: "100%",
    },
    errorText: {
      color: Colors.error,
      fontSize: scaledSize(12),
      paddingLeft: scaledSize(10),
    },
  });
