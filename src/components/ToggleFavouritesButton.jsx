import { useDispatch } from "react-redux";
import {
  selectFavourites,
  toggleFavouritedRecipe,
} from "../features/recipes/recipeManagerSlice";
import { setMessage } from "../features/account/accountSlice";
import { ReactComponent as SaveIcon } from "../assets/saveIcon.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MessageContainer from "./MessageContainer";

const ToggleFavouritesButton = (props) => {
  const favourites = useSelector(selectFavourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSaveInput = async () => {
    const token = localStorage.getItem("token");
    console.log(props.id);

    if (!token) {
      dispatch(setMessage("To save recipes, please go to settings and login"));
    }

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
        dispatch(toggleFavouritedRecipe(props.id));
        navigate("/favourites");
      } catch (error) {
        console.log(error);
      }
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
      <MessageContainer />
    </>
  );
};

export default ToggleFavouritesButton;
