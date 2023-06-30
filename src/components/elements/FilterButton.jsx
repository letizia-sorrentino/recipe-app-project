const FilterButton = (props) => {
  return (
    <div>
      <button className="filterButton" 
        // onClick={(e) => console.log("onClick")}
        >
        {" "}
        {props.children}
      </button>
    </div>
  );
};

export default FilterButton;
