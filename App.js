import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import HomeScreen from "./src/screens/main/home";

const App: () => Node = () => {

  return (
        <HomeScreen/>
  );
};

const styles = StyleSheet.create({
  container: {
  }
});

export default App;
