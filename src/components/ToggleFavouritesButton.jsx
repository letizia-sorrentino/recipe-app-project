import { useDispatch } from "react-redux";
import {
  selectFavourites,
  toggleFavouritedRecipe,
} from "../features/recipes/recipeManagerSlice";
import { ReactComponent as SaveIcon } from "../assets/saveIcon.svg";
import { useSelector } from "react-redux";

const ToggleFavouritesButton = (props) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);

  const onSaveInput = () => {
    dispatch(toggleFavouritedRecipe(props.id));
  };

  console.log(favourites, props.id);
  return (
    <>
      <button className="addButton" onClick={onSaveInput}>
        
        {favourites.includes(props.id) ? (
          <SaveIcon style={{ fill: "black" }} 
           />) : (<SaveIcon />)}
      
      </button>
    </>
  );
};

export default ToggleFavouritesButton;
