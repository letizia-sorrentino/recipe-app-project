import { useDispatch } from "react-redux";
import {
  selectFavourites,
  toggleFavouritedRecipe,
} from "../features/recipes/recipeManagerSlice";
import { ReactComponent as SaveIcon } from "../assets/saveIcon.svg";
import axios from "axios";
import { useSelector } from "react-redux";

const ToggleFavouritesButton = (props) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);

  const onSaveInput = async () => {
    const token = localStorage.getItem("token");
    console.log(props.id);

    if (favourites.includes(props.id)) {
      //delete the recipe
      try {
        const result = await axios.delete(
          `http://localhost:6001/favourites/${props.id}`,
          {
            headers: {
              token: token,
            },
          }
        );
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }

    } else {
      //add recipe
      try {
        const results = await axios.post(
          `http://localhost:6001/favourites/`,
          { recipeId: props.id },

          {
            headers: {
              token: token,
            },
          }
        );

        console.log(results.data);
      } catch (error) {
        console.log(error);
      }
      dispatch(toggleFavouritedRecipe(props.id));
    }
  };

  
  return (
    <>
      <button className="addButton" onClick={onSaveInput}>
        {favourites.includes(props.id) ? (
          <SaveIcon style={{ fill: "black" }} />
        ) : (
          <SaveIcon />
        )}
      </button>
    </>
  );
};

export default ToggleFavouritesButton;
