import React from 'react';
import { render , screen } from '@testing-library/react';
import FoodItem from './FoodItem';


describe('Testing FoodItem component', () => {
    const item = {
        "foodId": "food_aeqk7lua3h3qopbk2qew0aeif5p8",
        "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_pepperoni_pizza",
        "label": "Pepperoni Pizza",
        "image": "https://www.edamam.com/food-img/a85/a85bb70cafe70e500090f722f261bb9a.jpg"
    };

    it('render FoodItem', () => {
        render(<FoodItem item={item} />)
        const foodItem = screen.getByTestId('food_aeqk7lua3h3qopbk2qew0aeif5p8');
        expect(foodItem).toHaveTextContent('Pepperoni Pizza');
    })
})

