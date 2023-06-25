import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchInput, setSearchInput } from './searchInputSlice';
import './SearchBar.css'

const SearchBar = () => {
    const searchInput = useSelector(selectSearchInput)
    const dispatch = useDispatch();

    //Search box
    const onSearchInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        dispatch(setSearchInput(e.target.value));
    };

    console.log(searchInput);


    return (
        <div>
            <input
                className="searchBar"
                type="text"
                placeholder='Search Recipes...'
                autoFocus={true}
                value={searchInput}
                onChange={onSearchInput}
            />

        </div>
    );

}

export default SearchBar;
