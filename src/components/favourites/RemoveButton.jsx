import { useDispatch } from "react-redux";
import { removeRecipe } from "../../features/recipes/recipeManagerSlice";

const RemoveButton = () => {
  const dispatch = useDispatch();
  const onRemoveInput = (props) => {
    const { id } = props;
    dispatch(removeRecipe(id));
  };

  return (
    <>
      <button className="addButton" onClick={onRemoveInput}>
        Unsave
      </button>
    </>
  );
};

export default RemoveButton;
