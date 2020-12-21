import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from "../contexts/RecipeContext";

const Item = props => {
    const { fullRecipe } = useContext(RecipeContext);
    
    return(
        
        <div className="recipes">
            <div className="recipeList">
                <Link className="recipeTitle" to="/recipe" onClick={fullRecipe(props.recipe)}>{props.recipe.strMeal}</Link>
                <img onClick={fullRecipe(props.recipe)} className="recipePic" src={props.recipe.strMealThumb} alt={props.recipe.strMeal} />
            </div>
        </div>
    )
}

export default Item;