import React, { useContext, useEffect } from 'react';
import logo from "../../src/images/logo.png";
import "../App.scss";
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ListContext } from "../contexts/ListContext";
import Item from "./Item";
import Search from "./Search";


const Home = () => {

    const { recipes, searchResults } = useContext(ListContext);
    // useEffect(() => {
    //     console.log("isSearch", isSearch)
    // }, [isSearch])
    
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
            {(recipes === undefined) ? <FontAwesomeIcon icon={faSpinner} size="3x" /> :
            recipes.map(recipe => {
                return (
                    <Item
                        key={recipe.strMeal}
                        recipe={recipe}
                    />
                )
            })}
            <Link to="/results">{<FontAwesomeIcon id="searchIcon" icon={faSearch} size="3x" />}</Link>
        </div>
    )
}

export default Home;