import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import HomeScreen from "./src/screens/main/home";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import FlashMessage from "react-native-flash-message";

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <HomeScreen/>
      <FlashMessage  position="top" statusBarHeight={30} duration={5000} />
    </Provider>

  );
};

const styles = StyleSheet.create({
  container: {
  }
});

export default App;
