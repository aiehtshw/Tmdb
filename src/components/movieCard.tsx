import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../utils/colors";
import { Languages } from "../config";
import { DEFAULT_LANGUAGE } from "../config/language";


const MovieCard = (props) => {
      return(

        <TouchableOpacity style = {styles.container}>
          <View style={styles.card}>
            <View style={styles.poster_image}>
              <Image source={{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
                     style = {{ width: '90%', height: '90%',alignSelf: 'center'}}/>
            </View>
            <View style={styles.movie_info}>
              <Text>{props.movie_title}</Text>
              <Text>{props.brief_overview}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    height:200,
    borderRadius:20,
    alignSelf:"center",
    width:'90%',
    backgroundColor:COLORS.card_background
  },
  card: {
    flexDirection:'row'
  },
  poster_image: {
    width: '50%',
  },
  movie_info:{
    width: '50%',
  }
})

export default MovieCard;
