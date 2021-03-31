import { StatusBar } from "expo-status-bar";
import React from "react";

import * as firebase 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNd4pG9KajpYWcOS6geWv1cxDaqLCMLNk",
  authDomain: "instagram-clone-4f474.firebaseapp.com",
  projectId: "instagram-clone-4f474",
  storageBucket: "instagram-clone-4f474.appspot.com",
  messagingSenderId: "264775887335",
  appId: "1:264775887335:web:72e98417f65acce5cd3542",
  measurementId: "G-QXK2KV5W2N"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
