import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import { useDispatch } from "react-redux";
import { getFoodItems } from "../actions/food.action";
import FoodItem from "./FoodItem";

export const FoodSearch = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [foodItems, setFoodItems] = useState([]);
  const [show, setShow] = useState(true);

  const onSubmit = formValues => {
    dispatch(getFoodItems(formValues?.foodItem)).then(
      result => {
        setFoodItems(result.payload);
        setShow(false);
      }
    )
  }

  return (
    <>
      <form className='search-form' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="foodItem"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} placeholder="enter food item like pizza" required />}
        />
        <input type="submit" value='search' />
      </form>

      <div hidden={show}>
        {
          (foodItems.length === 0) ? <h2>Sorry... Not available , please try another food</h2> :
            <div>
              <h2> found below food items </h2>
              <ul>
                {
                  foodItems.map(item => (
                    <li key={item.food.foodId}>
                      <FoodItem item={item.food} />
                    </li>
                  ))
                }
              </ul>
            </div>
        }
      </div>

    </>
  );
};