const Search = (props) => {
  const {onSearchInput} = props;
    return <div> 
      <input className="searchBar" onInput={onSearchInput} type="text" />
      </div>;
  };
  
  export default Search;