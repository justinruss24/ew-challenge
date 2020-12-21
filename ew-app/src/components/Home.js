import React, { useContext } from 'react';
import logo from "../../src/images/logo.png";
import "../App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ListContext } from "../contexts/ListContext";
import Item from "./Item";
import Search from "./Search";


const Home = () => {

    const { recipes, searchResults } = useContext(ListContext);
    
    return(
        <div>
            <header>
                <div className="logoDiv">
                    <img src={logo} alt="logo" />
                </div>  
            </header>
            <Search />
            <div className="title">
                <h4>Recipes of the Day</h4>
            </div>
            {/* if searchResults.length === 0 then render whats already there. if not, render the search results in its space */}
            {(recipes === undefined) ? <FontAwesomeIcon icon={faSpinner} size="3x" /> :
            recipes.map(recipe => {
                return (
                    <Item
                        key={recipe.strMeal}
                        recipe={recipe}
                    />
                )
            })}
            <FontAwesomeIcon id="searchIcon" icon={faSearch} size="3x" />
        </div>
    )
}

export default Home;