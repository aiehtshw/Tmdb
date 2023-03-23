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

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>

  );
};

const styles = StyleSheet.create({
  container: {
  }
});

export default App;
