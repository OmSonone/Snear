import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import appleIcon from "../../assets/logos/apple.png";
import googleIcon from "../../assets/logos/google.png";
import { Colors } from "../../constants/colors/Colors";
import { scaledSize } from "../../utilities/Utilities";
export default function LargeButton(props) {
  const { name, bgColor, imageUrl, fontColor, fontSize, onPress, style } =
    props;
  // console.log(imageUrl);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style, { backgroundColor: bgColor }]}
    >
      {imageUrl ? (
        <View
          style={{
            width: "50%",
            justifyContent: "flex-end",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <LottieView
            source={require("../../assets/lottie/lf30_editor_esukjqlm.json")}
            style={{ height: 40, width: 50 }}
            autoPlay
            loop={false}
          /> */}
          <Image
            source={imageUrl === "googleIcon" ? googleIcon : appleIcon}
            style={{ height: 20, width: 20 }}
          />
        </View>
      ) : null}
      <View
        style={{
          width: imageUrl ? "50%" : "100%",
          justifyContent: imageUrl ? "flex-start" : "center",
          display: "flex",
          alignItems: imageUrl ? "flex-start" : "center",
        }}
      >
        <Text
          style={{ color: fontColor, fontWeight: "bold", fontSize: fontSize }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
