import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from "react-router-dom";
import Home from "../src/components/Home";
import "./App.scss";
import Recipe from "../src/components/Recipe";
import { RecipeContext } from "../src/contexts/RecipeContext";
import { ListContext } from "../src/contexts/ListContext";

function App() {
  const [recipes, setRecipes] = useState();
  const [current, setCurrent] = useState();
  const [val, setVal] = useState('');
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
      .then(axios.spread((obj1, obj2, obj3, obj4, obj5) => {
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
  const searchRecipes = async () => {
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    .then(res => {
      console.log(res)
      setVal(res.data.meals)
    })
    .catch(err => {
      console.log(err)
    })
  }
  const fullRecipe = (recipe) => {
    setCurrent(recipe)
  }

  useEffect(() => {
    {(val === '') ? getRecipes() : searchRecipes();}
  }, [val])


  return (
    <div>
      <RecipeContext.Provider value={{recipes, current, fullRecipe}}>
        <ListContext.Provider value={{recipes, getRecipes, holdRecipes, val, setVal, searchRecipes}} >
          <Route exact path="/">
            <Home />
          </Route>
        </ListContext.Provider>
          <Route exact path="/recipe">
            <Recipe />
          </Route>
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
