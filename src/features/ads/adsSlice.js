import { createSlice } from '@reduxjs/toolkit'
import { ADS } from '../../app/shared/ADS';

const initialState = {
    adsArray: ADS

};

const adsSlice = createSlice({
    name: 'ads',
    initialState

});

export const promotionsReducer = adsSlice.reducer;

export const selectFeaturedAd = (state) => {
    return state.ads.adsArray.find(
        (ads) => ads.featured);
};