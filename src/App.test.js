import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


describe('Testing App component', () => {
  const initialState = {
    foodItems: [],
    loading: "idle",
    error: "",
  }
  const mockStore = configureStore()
  let foodStore;

  it('Shows "Discover your favourite food here"', () => {
    foodStore = mockStore(initialState)
    const { getByText } = render(<Provider store={foodStore}><App /></Provider>)
    expect(getByText('Discover your favourite food here')).toBeInTheDocument();
  })

  it('Shows "Sorry... Not available , please try another food"', () => {
    foodStore = mockStore(initialState)
    const { getByText } = render(<Provider store={foodStore}><App /></Provider>)
    expect(getByText('Sorry... Not available , please try another food')).toBeInTheDocument();
  })
})

