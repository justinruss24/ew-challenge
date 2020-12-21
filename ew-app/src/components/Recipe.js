import React, { useContext } from 'react';
import { RecipeContext } from "../contexts/RecipeContext";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Recipe = () => {
    const { current } = useContext(RecipeContext);
    let history = useHistory();

    console.log("current", current);
    return(
        <div>
            <FontAwesomeIcon id="backArrow" size="3x" icon={faArrowLeft} onClick={() => history.goBack()}/>
            <img className="recipePic" src={current.strMealThumb} alt={current.strMeal}/>
            <h3>{current.strMeal}</h3>
            <h3>Directions</h3>
            <p>{current.strInstructions}</p>
        </div>
    )
}

export default Recipe;