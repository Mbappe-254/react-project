import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { adsReducer } from '../features/ads/adsSlice';
import { partnersReducer } from '../features/partners/PartnersSlice';
import { icecreamsReducer } from '../features/icecreams/iceCreamSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ads: adsReducer,
    partners : partnersReducer,
    icecreams :  icecreamsReducer,

  },
});
