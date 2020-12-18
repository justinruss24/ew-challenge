import React, { useContext } from 'react';
import { Link, Route } from 'react-router-dom';
import { RecipeContext } from "../contexts/RecipeContext";

const Item = props => {
    const { fullRecipe } = useContext(RecipeContext);

    return(
        <div className="recipes">
            <div className="recipeList">
                <Link to="/recipe" onClick={fullRecipe(props.recipe)}>{props.recipe.strMeal}</Link>
                <img className="recipePic" src={props.recipe.strMealThumb} alt={props.recipe.strMeal} />
            </div>
        </div>
    )
}

export default Item;