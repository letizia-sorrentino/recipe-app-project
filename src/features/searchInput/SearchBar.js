import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchInput, setSearchInput } from './searchInputSlice';
import './SearchBar.css'
import { selectAllRecipes } from '../recipes/recipesSlice';

const SearchBar = () => {
    const recipes = useSelector(selectAllRecipes);
    const searchInput = useSelector(selectSearchInput)
    const dispatch = useDispatch();

    //Search box
    const onSearchInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        dispatch(setSearchInput(e.target.value));
    };

    //console.log(searchInput);
    //console.log(recipes);
    
    // //filter the result
    // let filteredList = [...recipes];
    // console.log(filteredList);

    // //filtered by search
    // if (searchInput) {
    //     filteredList = filteredList.filter((recipe) => {
    //         //console.log(recipe.title, searchInput);
    //         if (recipe.title.toLowerCase().includes(searchInput.toLowerCase()))
    //             return true;
    //     });
    // }

    console.log(recipes);


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
