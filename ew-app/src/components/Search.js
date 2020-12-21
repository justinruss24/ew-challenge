import React, { useContext } from 'react';
import logo from "../../src/images/logo.png";
import { RecipeContext } from '../contexts/RecipeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Item from "./Item";
import { useHistory } from 'react-router-dom';


const Search = () => {
    const { val, setVal, searchRecipes, searchResults } = useContext(RecipeContext);
    let history = useHistory();

    const handleChange = e => {
        setVal(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        searchRecipes(val)
    }

    return (
        <div>
            <header>
                <FontAwesomeIcon className="backArrow" size="3x" icon={faArrowLeft} onClick={() => history.goBack()} />
                <div className="logoDiv">
                    <img src={logo} alt="logo" />
                </div>
            </header>
            <div className="searchbar">
                <form onSubmit={handleSubmit}>
                    <input
                        id="search"
                        value={val}
                        type="text"
                        placeholder={'search for a meal'}
                        onChange={handleChange}
                    />   
                </form>
            </div>
            {(searchResults === undefined) ? <FontAwesomeIcon icon={faSpinner} size="3x" /> :
                searchResults.map(recipe => {
                    return (
                        <Item
                            key={recipe.strMeal}
                            recipe={recipe}
                        />
                    )
                })}
        </div>
    )
}

export default Search;