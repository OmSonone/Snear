import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpOrSignInScreen from "../Screens/SignUpOrSignIn/SignUpOrSignInScreen";
import SignInScreen from "../Screens/SignIn/SignInScreen";
import SignUpScreen from "../Screens/SignUp/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUpOrSignIn"
        component={SignUpOrSignInScreen}
        options={{ headerShown: false, gestureEnabled: true }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false, gestureEnabled: true }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false, gestureEnabled: true }}
      />
    </Stack.Navigator>
  );
}
