import React, { useContext } from 'react';
import { RecipeContext } from "../contexts/RecipeContext";


const Recipe = () => {
    const { current  } = useContext(RecipeContext);

    console.log("current", current);
    return(
        <div>
            <img className="recipePic" src={current.strMealThumb} alt={current.strMeal}/>
            <h3>{current.strMeal}</h3>
            <h3>Directions</h3>
            <p>{current.strInstructions}</p>
        </div>
    )
}

export default Recipe;