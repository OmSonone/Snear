import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialsIcon from "react-native-vector-icons/MaterialIcons";
import { Kohana } from "react-native-textinput-effects";

import { Colors } from "../../constants/colors/Colors";
import { scaledSize } from "../../utilities/Utilities";

export default function LoginInputs(props) {
  const {
    iconName,
    isPassword,
    label,
    onChangeText,
    onEyePress,
    eyeIcon,
    showPassword,
    autoCapitalize,
    autoCorrect,
    autoCompleteType,
    keyboardType,
  } = props;

  return (
    <View
      style={{
        width: "100%",
        height: scaledSize(50),
        marginVertical: scaledSize(10),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Kohana
        style={{
          backgroundColor: Colors.secondary,
          height: scaledSize(50),
          borderRadius: scaledSize(10),
        }}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        autoCompleteType={autoCompleteType}
        label={label}
        iconClass={MaterialsIcon}
        iconName={iconName}
        iconColor={"#f4d29a"}
        inputPadding={scaledSize(10)}
        secureTextEntry={showPassword}
        keyboardType={keyboardType}
        labelStyle={{
          color: Colors.white,
          fontWeight: "bold",
        }}
        onChangeText={onChangeText}
        inputStyle={{ color: Colors.white, fontWeight: "bold" }}
        labelContainerStyle={{ padding: scaledSize(5) }}
        iconContainerStyle={{ padding: scaledSize(10) }}
        useNativeDriver
      />
      {isPassword ? (
        <TouchableOpacity onPress={onEyePress}>
          <MaterialsIcon
            name={eyeIcon}
            size={20}
            color={Colors.white}
            style={{ marginLeft: scaledSize(20) }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
