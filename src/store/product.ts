import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../API/config";

interface DataNeededFromRes {
  data: {
    id: string;
    title: string;
    price: string;
    images: {
      [index: number]: { url: string };
    };
    categories: {
      [index: number]: { title: string };
    };
  }[];
}

interface DataItem {
  id: string;
  title: string;
  price: string;
  url: string;
  CategoryTitle: string;
}

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios.get<DataNeededFromRes>(
        `${baseUrl}/product?page=0&perPage=10&price[from]=0&price[to]=10000`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      const formattedData = data.data.data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          url: item.images[0].url,
          CategoryTitle: item.categories[0].title,
        };
      });
      return formattedData;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const products = createSlice({
  name: "products",
  initialState: { products: <any>[] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      //   console.log(action);
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // const { data } = action.payload;
      state.products = action.payload;
      //   console.log(action.payload.data.data)
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      // console.log(action);
    });
  },
});

export default products.reducer;
