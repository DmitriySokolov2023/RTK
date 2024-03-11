import {configureStore} from "@reduxjs/toolkit";
import {favoritesSlice} from "./favorites/favorites.slice.js";


const rootReducer = {
    favorites:favoritesSlice.reducer
}
export const store = configureStore({
    reducer:rootReducer
})