import { useDispatch } from "react-redux";
import {
  addRecipe,
  selectFavourites,
} from "../features/recipes/recipeManagerSlice";
import { ReactComponent as SaveIcon } from "../assets/saveIcon.svg";
import { useSelector } from "react-redux";

const AddButton = (props) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);

  const onSaveInput = () => {
    dispatch(addRecipe(props.id));
  };

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

export default AddButton;
