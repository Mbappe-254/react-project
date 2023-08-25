import { createSlice } from "@reduxjs/toolkit";
import { ICECREAMS } from "../../app/shared/ICECREAMS";

const initialState = {
  icecreamArray: ICECREAMS
};

const creamsSlice = createSlice({
  name: "icecreams",
  initialState
});

export const icecreamsReducer = creamsSlice.reducer;

export const selectAllIcecreams = (state) => {
  return state.icecreams.icecreamsArray;
};
// export const selectRandomCampsite = () => {
// return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
export const selectCreamById = (id) => (state) => {
  return state.icecreams.icecreamsArray.find(
    (icecream) => icecream.id === parseInt(id)
  );
};

export const selectFeaturedCreams = (state) => {
  return state.icecream.icecreamArray.find((icecream) => icecream.featured);
};
