import React, { useEffect, useRef, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../utils/colors";
import MovieCard from "../../components/movieCard";
import { Devices } from "../../config";
import Background from "../../components/background";
import RBSheet from "react-native-raw-bottom-sheet";
import MovieDetails from "../../components/MovieDetails";
import SearchBar from "../../components/searchBar";

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
  //Opening PopUp
  const popUpRef = useRef();
  //Controlling Flow Which is Open PopUp
  const initialState = useRef(false);
  //Update State with Selected Movie/TV
  const [selected,setSelected] = useState('');
  //For hold searchbar's text
  const [search,setSearch] = useState();
  /**
   * For Opening PopUp With Movie/TV Show Which Is Choosen by User
   * */
  const openPopUp = (item) =>{
    if(!initialState.current)
      initialState.current = true;
    setSelected(item);
  }
  /**
   * Update Ref When PopUp Closed to false
   * */
  const whenPopUpClosed = () => {
    initialState.current=false;
  }
  /**
   * Function of SearchIcon's onPress button
   * When you press on icon this function will send request
   * */
  const SearchEngine = async () =>{
    console.log(search);
  }
  /**
   * For Open PopUp
   * */
  useEffect(()=>{
    if(initialState.current)
      popUpRef.current.open();
  },[selected])

  return(
    <Background>
      <View style={styles.searchBar}>
        <SearchBar
          setSearch={setSearch}
          search={search}
          iconOnPress={SearchEngine}
        />
      </View>
      <View style={{marginTop: 20}}/>
      <FlatList
        data={Movies}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <MovieCard
            uri={item.uri}
            movie_title={item.movie_title}
            brief_overview={item.brief_overview}
            onPress={()=>{openPopUp(item)}}
          />
        )}
      />
      <RBSheet
        ref={popUpRef}
        height={Devices.height*0.75}
        openDuration={250}
        dragFromTopOnly={true}
        closeOnDragDown={true}
        onClose={whenPopUpClosed}
        customStyles={{
          container: {

            alignItems: "center",
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
          },
          wrapper: {
          },
          draggableIcon: {
            height:4,
            width:35,
            borderRadius:10,
            backgroundColor: COLORS.black,
          },
        }}
      >
        {
          selected!==undefined &&
          <View style={[styles.popUpContainer]}>
            <MovieDetails
              uri={selected.uri}
              movie_title={selected.movie_title}
              brief_overview={selected.brief_overview}
            />
          </View>
        }

      </RBSheet>
      <View style={{marginTop: 20}}/>
    </Background>
  );
}
const styles = StyleSheet.create({
  container: {

  },
  searchBar:{
    borderWidth:0.5,
    borderColor:COLORS.white,
    marginTop:50,
    flexDirection:"row",
    borderRadius: 10,
    width: '90%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: COLORS.card_background
  },
  popUpContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.pop_up_background,
  },

})
export default HomeScreen;
