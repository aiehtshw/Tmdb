import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../utils/colors";
import MovieCard from "../../components/movieCard";
import { Devices } from "../../config";
import Background from "../../components/background";

const HomeScreen = ({navigation}) => {
  return(
    <Background>
      <MovieCard
        uri={'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}
        movie_title={'Hello'}
        brief_overview={'asdafkmdkllfddlşflşsflşslşfdslşşfldkdfkmdfşlsşdglsşlgsgşdslgksdş'}
      />
    </Background>
  );
}
const styles = StyleSheet.create({
  container: {

  }
})
export default HomeScreen;
