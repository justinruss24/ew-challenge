import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

const Search = () => {
    const { val, setVal, searchRecipes } = useContext(ListContext);
    const handleChange = e => {
        setVal(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        searchRecipes(val)
    }

    return (
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
    )
}

export default Search;