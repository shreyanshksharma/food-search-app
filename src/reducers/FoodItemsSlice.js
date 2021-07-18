import { createSlice } from "@reduxjs/toolkit";
import { getFoodItems } from '../actions/food.action';

const FoodItemsSlice = createSlice({
    name: "foodItems",
    initialState: {
        foodItems: [],
        loading: "idle",
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFoodItems.pending, (state) => {
            state.foodItems = [];
            state.loading = "loading";
        });
        builder.addCase(
            getFoodItems.fulfilled, (state, { payload }) => {
                state.foodItems = payload;
                state.loading = "loaded";
            });
        builder.addCase(
            getFoodItems.rejected, (state, action) => {
                state.loading = "error";
                state.error = action.error.message;
            });
    }
});

export default FoodItemsSlice;