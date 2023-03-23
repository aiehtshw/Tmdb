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
  EMPTY_POSTER: 'https://img-s2.onedio.com/id-62b1b20262b86c2d2bfc73b1/rev-0/w-635/f-jpg/s-c96b4490c9b364fcf0e0ed4fd8ea965f36201d6f.jpg',
  IMAGE_SOURCE:'https://image.tmdb.org/t/p/w500',
  hostApi: 'https://api.themoviedb.org/3',
  hostApiHeaders: {
    headers: {

    }
  }
}
export const API_KEY = '10ca17220b316da5a239a643ee071b4b';
