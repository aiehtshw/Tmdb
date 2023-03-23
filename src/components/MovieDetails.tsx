import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../utils/colors";
import { RFValue } from "react-native-responsive-fontsize";
import PropTypes from "prop-types";
import { Languages } from "../config";
import { DEFAULT_LANGUAGE } from "../config/language";
import { Movie, TVShow } from "../../assets/icons";

const MovieDetails = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.upSide}>

        <View style={styles.poster_image}>
          <Image source={{uri:props.uri}}
                 style = {{resizeMode: 'contain',width: '90%', height: '90%',alignSelf: 'center'}}/>
        </View>

        <View style={styles.movie_info}>
          <View style={styles.info_container}>

            <Text style={styles.title}>{props.movie_title}</Text>
            <View style={{borderBottomWidth:0.5}}/>

            <View style={styles.detailes}>
              <Text>{props.release_date}</Text>
              {
                props.media_type === Languages[DEFAULT_LANGUAGE].movie
                ?<Movie height={20} width={20} fill={COLORS.black}/>
                :<TVShow height={20} width={20} fill={COLORS.black}/>
              }
              <View style={styles.vote_container}>
                <Text style={styles.vote_average}>{props.vote_average}</Text>
              </View>
            </View>

          </View>
        </View>

      </View>
      <Text>{props.brief_overview}</Text>
    </View>
  );
}

MovieDetails.prototype = {
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
    fontSize:RFValue(18)
  },
  detailes: {
    marginTop: 5,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
  },
  vote_container: {
    width:35,
    height: 35,
    borderRadius:35,
    backgroundColor:COLORS.success_message,
    justifyContent:'center',
    alignItems:'center'
  },
  vote_average: {
    color:COLORS.white,
    fontSize: RFValue(10)
  }
})

export default MovieDetails;
