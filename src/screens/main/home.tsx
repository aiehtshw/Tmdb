import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../utils/colors";
import MovieCard from "../../components/movieCard";
import { API_KEY, Configs, Devices, Languages } from "../../config";
import Background from "../../components/background";
import RBSheet from "react-native-raw-bottom-sheet";
import MovieDetails from "../../components/MovieDetails";
import SearchBar from "../../components/searchBar";
import { useDispatch } from "react-redux";
import { fetchMultiSearch } from "../../redux/reducers/search/multisearch/MultiSearchSlice";
import { useAppSelector } from "../../redux/store";
import { DEFAULT_LANGUAGE } from "../../config/language";
const HomeScreen = ({navigation}) => {
  const MultiSearchState = useAppSelector((state) => state.MultiSearch);
  const dispatch = useDispatch();

  const [Movies,setMovies] = useState({});
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
    setSelected('');
    initialState.current=false;
  }
  /**
   * Function of SearchIcon's onPress button
   * When you press on icon this function will send request
   * */
  const SearchEngine = async () =>{
    setMovies({})
    dispatch(
      fetchMultiSearch({
        api_key: API_KEY,
        language: 'tr',
        query: search,
        page: 1,
        include_adult: false
      })
    )
  }
  /**
   * For Open PopUp
   * */
  useEffect(()=>{
    console.log("selected")
    console.log(selected)
    if(initialState.current)
      popUpRef.current.open();
  },[selected])
  /**
   * Movie List
   * */
  useEffect(()=>{

    setMovies(MultiSearchState.results.filter((x) => x.media_type != 'person'))
  },[MultiSearchState.results])
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
      {
        MultiSearchState.search_state==="Waiting"
          ?(<>
              <ActivityIndicator
                visible={true}
                //Text with the Spinner
                textContent={Languages[DEFAULT_LANGUAGE].loading}
                //Text style of the Spinner Text
                textStyle={{color: '#000',}}/>
            </>)
          :(<>
            <FlatList
              data={Movies}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => (
                <MovieCard
                  uri={Configs.IMAGE_SOURCE + item.poster_path}
                  movie_title={item.title!=undefined? item.title: item.name}
                  brief_overview={item.overview}
                  onPress={()=>{openPopUp(item)}}
                />
              )}
            />
          </>)
      }

      <RBSheet
        ref={popUpRef}
        height={Devices.height*0.7}
        openDuration={250}
        closeDuration={350}
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
              uri={Configs.IMAGE_SOURCE +selected.poster_path}
              movie_title={selected.title!=undefined? selected.title: selected.name}
              brief_overview={selected.overview}
              media_type={selected.media_type==="movie" ? Languages[DEFAULT_LANGUAGE].movie: Languages[DEFAULT_LANGUAGE].tv}
              release_date={selected.release_date}
              vote_average={selected.vote_average}
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
