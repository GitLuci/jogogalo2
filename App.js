
import { StyleSheet,Text, View } from "react-native";
import * as React from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Routes from './Routes';

export default function App() {
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

  );
}


