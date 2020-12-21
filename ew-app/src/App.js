import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from "react-router-dom";
import Home from "../src/components/Home";
import Search from "../src/components/Search"
import "./App.scss";
import Recipe from "../src/components/Recipe";
import { RecipeContext } from "../src/contexts/RecipeContext";
import { ListContext } from "../src/contexts/ListContext";


function App() {
  const [recipes, setRecipes] = useState();
  const [val, setVal] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const holdRecipes = [];
  const holdSearch = [];
  const [current, setCurrent] = useState();
  // const [searched, setSearched] = useState(false);

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
  const searchRecipes = (value) => {
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    .then(res => {
      const searchMeals = res.data.meals
      searchMeals.map(meal => {
        holdSearch.push(meal)
      })
      console.log(holdSearch)
      setSearchResults(holdSearch)
      console.log(searchResults)
    })
    .catch(err => {
      console.log(err)
    })
  }
  const fullRecipe = (recipe) => {
    setCurrent(recipe)
  }
  useEffect(() => {
    getRecipes();
  }, [])


  return (
    <div>
      <RecipeContext.Provider value={{ recipes, current, fullRecipe, searchResults, val, setVal, searchRecipes }}>
        <ListContext.Provider value={{recipes, getRecipes, holdRecipes, val, setVal, searchRecipes}} >
          <Route exact path="/">
            <Home />
          </Route>
        </ListContext.Provider>
          <Route exact path="/recipe">
            <Recipe />
          </Route>
          <Route exact path="/results">
            <Search />
          </Route>
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
