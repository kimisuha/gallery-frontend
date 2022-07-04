/* import { gallerySlice } from "./Reducer/gallery";
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: gallerySlice.reducer
}); */

import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./Reducer/gallery";

const rootReducer = {
    gallery: galleryReducer
};

const store = configureStore({
    reducer: rootReducer
});


export default store;