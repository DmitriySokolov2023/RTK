import {createSlice} from "@reduxjs/toolkit";


export const favoritesSlice = createSlice({
    name:'favorites',
    initialState:{
        value:0
    },
    reducers:{
        incrementInitialState: (state)=>{
            state.value +=1
        }
    }
})

export const { incrementInitialState } = favoritesSlice.actions