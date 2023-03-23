import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { MultiSearchAPIResponse } from "../../../../services/search/multisearch/response";
import { showMessageTypes } from "../../../../utils/helpers/message";
import MultiSearchAPI from "../../../../services/search/multisearch";
import { Languages } from "../../../../config";
import { DEFAULT_LANGUAGE } from "../../../../config/language";
import { MultiSearchAPIRequest } from "../../../../services/search/multisearch/request";

// @ts-ignore
const initialState: MultiSearchAPIResponse = {
  search_state:'wait',
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

export const fetchMultiSearch = createAsyncThunk(
  'fetchMultiSearch',
  async (data:MultiSearchAPIRequest)=>{
    const response = await MultiSearchAPI.fetch(data);
    //console.log("fetch");
    //console.log(response);
    return response;
  }
);

const MultiSearchSlice = createSlice({
  name:'MultiSearch',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchMultiSearch.pending,(state, action) => {
      console.log("wait")
      state.search_state = 'Waiting'
    })
    builder.addCase(
      fetchMultiSearch.fulfilled,
      (state, action: PayloadAction<MultiSearchAPIResponse>) => {
        if(action.payload!==undefined){
          console.log("fulfilled")
          state.page = action.payload.page;
          state.results = action.payload.results;
          state.total_pages = action.payload.total_pages;
          state.total_results = action.payload.total_results;
          //console.log("action payload")
          //console.log(action.payload);
          //console.log(action)
          state.search_state = 'Success'
        }
        else{
          console.log("internet yok")
          state.search_state= 'Fail'
        }
      }
    );
    builder.addCase(fetchMultiSearch.rejected,(state, action)=>{
      console.log("rejected")
      state.search_state = 'Fail'
    })
  }
});
export default MultiSearchSlice.reducer;


