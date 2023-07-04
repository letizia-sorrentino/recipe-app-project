import { useDispatch } from "react-redux";
import { removeRecipe } from "../../features/recipes/recipeManagerSlice";
import closeIcon from "../../assets/closeIcon.svg"

const RemoveButton = () => {
  const dispatch = useDispatch();
  const onRemoveInput = (props) => {
    const { id } = props;
    dispatch(removeRecipe(id));
  };

  return (
    <>
      <button className="removeButton" onClick={onRemoveInput}>
        <img className="closeIcon" src={closeIcon} alt={closeIcon}/>
      </button>
    </>
  );
};

export default RemoveButton;
