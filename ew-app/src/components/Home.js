import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from "../../src/images/logo.png";
import "../App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Recipe from "../components/Recipe";


const Home = () => {
    const [recipes, setRecipes] = useState();
    const [redirect, setRedirect] = useState(false);
    const holdRecipes = [];

    const getRecipes = async () => {
        axios.all([
            axios
                .get('https://www.themealdb.com/api/json/v1/1/random.php'),
            axios
                .get('https://www.themealdb.com/api/json/v1/1/random.php'),
            axios
                .get('https://www.themealdb.com/api/json/v1/1/random.php'),
            axios
                .get('https://www.themealdb.com/api/json/v1/1/random.php'),
            axios
                .get('https://www.themealdb.com/api/json/v1/1/random.php')
        ])
        .then(axios.spread((obj1 ,obj2, obj3, obj4, obj5) => {
            holdRecipes.push(obj1.data.meals[0])
            holdRecipes.push(obj2.data.meals[0])
            holdRecipes.push(obj3.data.meals[0])
            holdRecipes.push(obj4.data.meals[0])
            holdRecipes.push(obj5.data.meals[0])
            setRecipes(holdRecipes)
        }))
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getRecipes();
    }, [])

    
    return(
        <div>
            <header>
                <div className="logoDiv">
                    <img src={logo} alt="logo" />
                </div>  
            </header>
            <div className="title">
                <h4>Recipes of the Day</h4>
            </div>
            <div className="recipes">
                {(recipes === undefined) ? <FontAwesomeIcon icon={faSpinner} size="3x" /> :
                recipes.map(recipe => {
                    return (
                    <div className="recipeList">
                        <h3>
                            {recipe.strMeal}
                        </h3>
                        <img id="recipePic" src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    )
                })}
            </div>
            <FontAwesomeIcon id="searchIcon" icon={faSearch} size="3x" />
        </div>
    )
}

export default Home;