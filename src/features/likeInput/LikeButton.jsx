import { useDispatch } from "react-redux";
import likeIcon from "../../assets/likeIcon.svg";
import { setLikeInput, setFillColour } from "./likeInputSlice";

const LikeButton = () => {

const dispatch = useDispatch();

  const onLikeInput = (e) => {
    
    const likeInput = e.target.value;
    dispatch(setLikeInput(likeInput));
    dispatch(setFillColour('white'));
    console.log('clicked');
  };

  return (
    <div>
      <img
        className="likeButton"
        onClick={onLikeInput}
        src={likeIcon}
        alt="likeIcon"
      />
    </div>
  );
};

export default LikeButton;
