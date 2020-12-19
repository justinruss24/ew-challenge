import React, { useContext } from 'react';
import logo from "../../src/images/logo.png";
import "../App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ListContext } from "../contexts/ListContext";
import Item from "./Item";


const Home = () => {

    const { recipes, val, setVal } = useContext(ListContext);
    const handleChange = event => {
        setVal(event.target.value)
    }
    
    return(
        <div>
            <header>
                <div className="logoDiv">
                    <img src={logo} alt="logo" />
                </div>  
            </header>
            <div className="searchbar">
                <input 
                    id="search"
                    value={val}
                    placeholder={'search for a meal'}
                    onChange={handleChange}
                />
            </div>
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
            <FontAwesomeIcon id="searchIcon" icon={faSearch} size="3x" />
        </div>
    )
}

export default Home;