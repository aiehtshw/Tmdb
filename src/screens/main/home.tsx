import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../utils/colors";
import MovieCard from "../../components/movieCard";
import { Devices } from "../../config";
import Background from "../../components/background";

const HomeScreen = ({navigation}) => {
  return(
    <Background>
      <MovieCard/>
    </Background>
  );
}
const styles = StyleSheet.create({
  container: {

  }
})
export default HomeScreen;
