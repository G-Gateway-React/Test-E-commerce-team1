import { createSlice } from "@reduxjs/toolkit";

const Refs = createSlice({
  name: "Refs",
  initialState: {
    data: {
      RefsArr: <any>[],
    },
  },
  reducers: {
    setRefs: (state, action) => {
      state.data.RefsArr.push(action.payload);
    },
  },
});

export const { setRefs } = Refs.actions;
export default Refs.reducer;
