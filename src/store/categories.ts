import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../API/config";
import { combineReducers } from "@reduxjs/toolkit";
export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios.get(`${baseUrl}/category`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      const formattedData = data.data.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
        };
      });
      return formattedData;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const categories = createSlice({
  name: "categories",
  initialState: { categories: <any>[] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, action) => {
      //   console.log(action);
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      // const { data } = action.payload;
      state.categories = action.payload;
      // console.log(state.products);
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      // console.log(action);
    });
  },
});

const FilteredCategories = createSlice({
  name: "FilteredCategories",
  initialState: { FilteredCategories: <any>[] },
  reducers: {
    setFilteredCategories: (state, action) => {
      state.FilteredCategories = action.payload;
    },
  },
});

export const { setFilteredCategories } = FilteredCategories.actions;

// export default categories.reducer;

export default combineReducers({
  CategoriesReducer: categories.reducer,
  FilteredCategoriesReducer: FilteredCategories.reducer,
});
