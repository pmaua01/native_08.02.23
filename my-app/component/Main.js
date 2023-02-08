import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { route } from "../router";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authSetChangeUser } from "../redux/auth/authOperations";

export const Main = () => {
  const state = useSelector((state) => state.auth.stateChange);

  const routing = route(state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authSetChangeUser());
  }, []);

  return (
    <NavigationContainer style={{ flex: 1, backgroundColor: "#fff" }}>
      {routing}
    </NavigationContainer>
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>Main</Text>
    // </View>
  );
};
