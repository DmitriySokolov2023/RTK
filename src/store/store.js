import {configureStore} from "@reduxjs/toolkit";
import {favoritesSlice} from "./favorites/favorites.slice.js";
import {cartSlice} from "./cart/cart.slice.js";


const rootReducer = {
    favorites:favoritesSlice.reducer,
    cart: cartSlice.reducer
}
export const store = configureStore({
    reducer:rootReducer
})