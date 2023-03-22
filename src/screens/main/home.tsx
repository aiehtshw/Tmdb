import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../utils/colors";
import MovieCard from "../../components/movieCard";
import { Devices } from "../../config";
import Background from "../../components/background";

const HomeScreen = ({navigation}) => {
  const Movies = [
    {
      uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
      movie_title:'Hello',
      brief_overview:'asdafkmdkllfddlşflşsflşslşfdslşşfldkdfkmdfşlsşdglsşlgsgşdslgksdş'
    },
    {
      uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
      movie_title:'Hello',
      brief_overview:'asdafkmdkllfddlşflşsflşslşfdslşşfldkdfkmdfşlsşdglsşlgsgşdslgksdş'
    },
    {
      uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
      movie_title:'Hello',
      brief_overview:'asdafkmdkllfddlşflşsflşslşfdslşşfldkdfkmdfşlsşdglsşlgsgşdslgksdş'
    },
    {
      uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
      movie_title:'Hello',
      brief_overview:'asdafkmdkllfddlşflşsflşslşfdslşşfldkdfkmdfşlsşdglsşlgsgşdslgksdş'
    },
    {
      uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
      movie_title:'Hello',
      brief_overview:'asdafkmdkllfddlşflşsflşslşfdslşşfldkdfkmdfşlsşdglsşlgsgşdslgksdş'
    },

  ]
  return(
    <Background>
      <FlatList
        data={Movies}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <MovieCard
            uri={item.uri}
            movie_title={item.movie_title}
            brief_overview={item.brief_overview}
          />
        )}
      />

    </Background>
  );
}
const styles = StyleSheet.create({
  container: {

  }
})
export default HomeScreen;
