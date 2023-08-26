import { createSlice } from '@reduxjs/toolkit';
import { ICECREAM } from '../../app/shared/ICECREAMS';

const initialState = {
  icecreamArray: ICECREAM
};

const creamsSlice = createSlice({
  name: "icecreams",
  initialState
});

export const icecreamsReducer = creamsSlice.reducer;

export const selectAllIcecreams = (state) => {
  return state.icecreams.icecreamArray;
};
export const selectCreamById = (id) => (state) => {
  return state.icecreams.icecreamArray.find(
    (icecream) => icecream.id === parseInt(id)
  );
};

export const selectFeaturedCreams = (state) => {
  return state.icecream.icecreamArray.find((icecream) => icecream.featured);
};
