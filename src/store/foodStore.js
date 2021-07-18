import { configureStore } from '@reduxjs/toolkit';
import FoodItemsSlice from '../reducers/FoodItemsSlice';

export const foodStore  =  configureStore({
    reducer : FoodItemsSlice.reducer,
});

export default foodStore ;