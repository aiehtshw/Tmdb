import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../utils/colors";
import {RFValue} from "react-native-responsive-fontsize";
import PropTypes from "prop-types";


const MovieCard = (props) => {
      return(

        <TouchableOpacity style = {styles.container}>

          <View style={styles.card}>

            <View style={styles.poster_image}>
              <Image source={{uri:props.uri}}
                     style = {{ width: '90%', height: '90%',alignSelf: 'center'}}/>
            </View>

            <View style={styles.movie_info}>

              <View style={styles.info_container}>
                <Text style={styles.title}>{props.movie_title}</Text>
                <View style={{borderWidth:0.5}}/>
                <Text>{props.brief_overview}</Text>
              </View>

            </View>

          </View>

        </TouchableOpacity>
      );
}
MovieCard.propTypes = {
  uri:  PropTypes.string.isRequired,
  movie_title:  PropTypes.string.isRequired,
  brief_overview:  PropTypes.string.isRequired,

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
    height: '100%',
    flexDirection:'row'
  },
  poster_image: {
    justifyContent:'center',
    width: '50%',
  },
  movie_info:{
    width: '50%',
  },
  info_container: {
    width:'90%'
  },
  title: {
    fontWeight:'bold',
    alignSelf: 'flex-end',
    fontSize:RFValue(20)
  },
  overview: {
    fontSize:RFValue(13)
  }
})

export default MovieCard;