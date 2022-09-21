import { createSlice } from "@reduxjs/toolkit";

const BagItems = createSlice({
  name: "FilteredCategories",
  initialState: {
    data: {
      BagItemsArr: <any>[],
      Counter: 0,
    },
  },
  reducers: {
    setBagItem: (state, action) => {
      state.data.BagItemsArr.push(action.payload);
      state.data.Counter = state.data.BagItemsArr.length;
    },
    ResetBagItem: (state, action) => {
      state.data.BagItemsArr = action.payload;
      state.data.Counter = state.data.BagItemsArr.length;
    },
  },
});

export const { setBagItem, ResetBagItem } = BagItems.actions;
export default BagItems.reducer;
