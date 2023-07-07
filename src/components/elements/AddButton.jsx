import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../features/recipes/recipeManagerSlice";
import { ReactComponent as SaveIcon } from "../../assets/saveIcon.svg";
import { useSelector } from "react-redux";
import { selectFavourites } from "../../features/recipes/recipeManagerSlice";

const AddButton = (props) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const [fillColour, setFillColour] = useState(false);

  const onSaveInput = () => {
    dispatch(addRecipe(props.id));
   setFillColour(!fillColour);
  };

  return (
    <>
      <button className="addButton" onClick={onSaveInput}>
        {favourites.includes(props.id) && (
          <SaveIcon style={{ fill: fillColour ? "black" : "unset" }} />
        )}
        {!favourites.includes(props.id) && <SaveIcon />}

        {/* {favourites.includes(props.id) ? (
          <SaveIcon style={{ fill: fillColour ? "black" : "unset" }} 
           />) : (<SaveIcon/>)} */}
      </button>
    </>
  );
};

export default AddButton;
