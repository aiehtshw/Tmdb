import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import HomeScreen from "./src/screens/main/home";
import { COLORS } from "./src/utils/colors";

const App: () => Node = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HomeScreen/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  }
});

export default App;
