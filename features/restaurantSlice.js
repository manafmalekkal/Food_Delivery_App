import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurantData : {
        id:null,
        imgUrl: null,
        title: null,
        rating: null,
        genre : null,
        adddress: null,
        short_description: null,
        dishes: null,
    },
}
export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state,action) => {
            state.restaurantData= action.payload;
        },
    },
});

export const {setRestaurant} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurantData;

export default restaurantSlice.reducer;