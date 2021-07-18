import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { GET_FOOD_ITEMS } from './action-types';

export const getFoodItems = createAsyncThunk(
    GET_FOOD_ITEMS, async (searchedFoodItem, thunkAPI) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
                params: { ingr: { searchedFoodItem } },
                headers: {
                    'x-rapidapi-key': '77f0831440msh979c31ee360c966p1ca49ajsndebbb4dc75f0',
                    'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com'
                }
            };
            const response = await axios.request(options);
            return await response.data.hints;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    });