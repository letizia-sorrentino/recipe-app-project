import { useDispatch } from "react-redux";
import { addRecipe  } from "../recipes/recipeManagerSlice";

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
      Save
    </button>
    </>
  );
};

export default AddButton;
