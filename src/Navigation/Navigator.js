import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStack from "./AuthStack";

export default function Navigator() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
