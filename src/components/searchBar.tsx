import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../utils/colors";
import { Languages } from "../config";
import { DEFAULT_LANGUAGE } from "../config/language";
import { SearchBarIcon } from "../../assets/icons";

const SearchBar = (props) => {
  return(
    <View style={{justifyContent: 'space-evenly',flexDirection:'row',width:'100%'}}>
      <TextInput
        placeholder={Languages[DEFAULT_LANGUAGE].search}

        style={styles.searchBarText}
        onChangeText={props.setSearch}
        value={props.search}
      />
      <TouchableOpacity style={styles.searchBarIcon} onPress={props.iconOnPress}>
        <SearchBarIcon height={30} width={30} fill={COLORS.white}/>
      </TouchableOpacity>
    </View>
  );
}

SearchBar.prototype = {

}


const styles = StyleSheet.create({
  searchBarIcon: {
    justifyContent:"center"
  },
  searchBarText: {
    marginLeft:10,
    height: 50,
    width:'70%',
    color:COLORS.white,
  }
});

export default SearchBar;
