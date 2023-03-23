import axios from 'axios'
import { API_KEY, Configs } from "../../../config";
import ServicesRoutes from "../../ServicesRoutes";
import {MultiSearchAPIResponse} from "./response";
import { showMessage } from "../../../utils/helpers/message";

export default class MultiSearchAPI {
  // @ts-ignore
  static async fetch(jBody): Promise<MultiSearchAPIResponse> {
    try {

      //console.log(Configs.hostApi+ServicesRoutes.search);
      console.log("-------------------------------------------------------------")
      console.log("jBody");
      console.log(jBody)
      console.log("-------------------------------------------------------------")
      const res = await axios.get(Configs.hostApi+ServicesRoutes.search.multi_search,
        {
          params:
            {
              api_key:jBody.api_key,
              language: jBody.language,
              query: jBody.query,
              page: jBody.page,
              include_adult: jBody.include_adult
            }
        }
      );
      console.log("data")
      console.log(res.data)
      return res.data;
    } catch (ex) {
      console.log("hata")
      console.log(ex);
    }
  }
}
