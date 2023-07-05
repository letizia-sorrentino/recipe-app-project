import { useDispatch } from "react-redux";
import { addRecipe  } from "../../features/recipes/recipeManagerSlice";
import favouritesIcon from "../../assets/favouritesIcon.svg"
import { useSelector } from "react-redux";
import { selectFavourites } from "../../features/recipes/recipeManagerSlice";

const AddButton = (props) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
   
 const onSaveInput = () => {
    dispatch(addRecipe(props.id));
  };

  return (
    <> 
    <button className="addButton" 
      onClick={onSaveInput}>
        {favourites.includes(props.id) && <p>I am favourited</p>}
      <img className="addButtonIcon" src={favouritesIcon} alt={favouritesIcon}/>
    </button>
    </>
  );
};

export default AddButton;
