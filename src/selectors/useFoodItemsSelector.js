import { createSelector } from "@reduxjs/toolkit";

export const selectFoodItems = createSelector(
    (state) => ({
       foodItems: state.foodItems,
       loading: state.foodItems.loading,
    }), 
    (state) =>  state
  );