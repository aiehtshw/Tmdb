import React from "react";
import { COLORS } from "../utils/colors";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
export default function Background({ children }) {

  return(
    <SafeAreaView style={styles.background}>
      <StatusBar translucent backgroundColor="transparent" />

      <SafeAreaView style={styles.container}>{children}</SafeAreaView>

    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    //width: '100%',
    backgroundColor:COLORS.background
  },
  container: {
    flex: 1,
    width: '100%'
  }
});
