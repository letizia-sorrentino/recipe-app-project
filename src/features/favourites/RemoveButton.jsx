import { useDispatch } from "react-redux";
import { removeRecipe } from "../recipes/recipeManagerSlice";

const RemoveButton = () => {
  const dispatch = useDispatch();

  const onRemoveInput = (e) => {
    const userInput = e.target.value;
    dispatch(removeRecipe(userInput));
    console.log('clicked');
  };

  return (
    <> 
    <button className="addButton" 
      onClick={onRemoveInput}>
      Unsave
    </button>
    </>
  );
};

export default RemoveButton;