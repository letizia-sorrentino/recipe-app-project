import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchInput, setSearchInput } from './searchInputSlice';
import './SearchBar.css'

const SearchBar = () => {
    const searchInput = useSelector(selectSearchInput)
    const dispatch = useDispatch();

    //Search box
    const onSearchInput = (e) => {
        setSearchInput(e.target.value);
        dispatch(setSearchInput(e.target.value));
    };

    console.log(searchInput);


    return (
        <div>
            <input
                className="searchBar"
                type="text"
                value={searchInput}
                onInput={onSearchInput}      
                placeholder='Search Recipes...'
            />

        </div>
    );

}

export default SearchBar;
