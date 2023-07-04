import { useDispatch } from "react-redux";
import { addRecipe  } from "../../features/recipes/recipeManagerSlice";
import favouritesIcon from "../../assets/favouritesIcon.svg"

const AddButton = () => {
  const dispatch = useDispatch();
  
 const onSaveInput = (e) => {
    const userInput = e.target.value;
    dispatch(addRecipe(userInput));
  };

  return (
    <> 
    <button className="addButton" 
      onClick={onSaveInput}>
      <img class="addButtonIcon" src={favouritesIcon} alt={favouritesIcon}/>
    </button>
    </>
  );
};

export default AddButton;
