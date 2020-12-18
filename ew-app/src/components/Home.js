import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from "../../src/images/logo.png";
import "../App.scss";


const Home = () => {
    const [recipes, setRecipes] = useState();

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
            console.log("recipes", recipes)
            console.log("recipes", holdRecipes)
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
                <h2>Recipe of the Day</h2>
            </div>
            <div className="recipes">
                {(recipes === undefined) ? <h2>Loading</h2> :
                recipes.map(recipe => {
                    return (
                    <div className="recipeList">
                        <h4>{recipe.strMeal}</h4>
                        <img id="recipePic" src={recipe.strMealThumb} alt='fix' />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;