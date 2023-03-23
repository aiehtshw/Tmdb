import { Dimensions } from "react-native";
import tr from "../utils/languages/locales/tr";

const HEIGHT_SCREEN = Dimensions.get('window').height;
const WIDTH_SCREEN = Dimensions.get('window').width;

/**
 * For Localization
 * */
export const Languages = Object.assign({}, { tr });

/**
 * Implement Device Height and Width Value Shortly,
 * Also this is for OS, moment, app version and build version variables
 * But now i do not call those
 * */
export const Devices = {
  height: HEIGHT_SCREEN,
  width: WIDTH_SCREEN,
}

/**
 * Config Values
 * */
export const Configs = {
  IMAGE_SOURCE:'https://image.tmdb.org/t/p/w500',
  hostApi: 'https://api.themoviedb.org/3',
  hostApiHeaders: {
    headers: {

    }
  }
}
export const API_KEY = '10ca17220b316da5a239a643ee071b4b';
