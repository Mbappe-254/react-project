import { createSlice } from "@reduxjs/toolkit";
import { ICECREAMS } from "../../app/shared/ICECREAMS";

const initialState = {
    icecreamsArray : ICECREAMS
    
};

const creamSlice = createSlice({
    name: 'icecreams',
    initialState,
});

export const icecreamsReducer = iceSlice.reducer;

export const selectAllIceCreams = (state) => {
    return state.icecreams.icecreamArray;
};

export const selectIcecreamById = (id) => (state) => {
    return state.icecreams.icecreamArray.find(
        (icecream) => icecream.id === parseInt(id));
};

export const selectFeaturedCream = (state) => {
    return state.icecreams.icecreamArray.find(
        (icecream) => icecream.featured);
}