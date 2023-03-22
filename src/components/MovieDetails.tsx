import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../utils/colors";
import { RFValue } from "react-native-responsive-fontsize";
import PropTypes from "prop-types";

const MovieDetails = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.upSide}>

        <View style={styles.poster_image}>
          <Image source={{uri:props.uri}}
                 style = {{ width: '90%', height: '90%',alignSelf: 'center'}}/>
        </View>

        <View style={styles.movie_info}>
          <View style={styles.info_container}>
            <Text style={styles.title}>{props.movie_title}</Text>
            <View style={{borderBottomWidth:0.5}}/>

          </View>
        </View>

      </View>

    </View>
  );
}

MovieDetails.prototype={
  uri:  PropTypes.string.isRequired,
  movie_title:  PropTypes.string.isRequired,
  brief_overview:  PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    width:'90%',
    alignSelf:"center",
  },
  upSide: {
    marginTop:15,
    height:200,
    alignContent:'center',
    width: '100%',
    flexDirection:'row'
  },
  poster_image: {
    justifyContent:'center',
    width: '50%',
  },
  movie_info: {
    width: '50%',
  },
  info_container: {
    width:'90%'
  },
  title: {
    fontWeight:'bold',
    alignSelf: 'flex-start',
    fontSize:RFValue(20)
  },
})

export default MovieDetails;
