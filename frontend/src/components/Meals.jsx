import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('https://food-ordering-website-zpue.onrender.com/meals');

      if (!response.ok) {
        //..
       
      }

      const meals = await response.json();
      setLoadedMeals(meals);
     
    }
    
    fetchMeals();
    
  }, []);

  return (
    <ul id="meals" className="justify-center ">
      {loadedMeals.map((meal) => (
       <MealItem key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
}
