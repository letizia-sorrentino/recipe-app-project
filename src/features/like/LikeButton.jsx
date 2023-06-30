import { useDispatch } from "react-redux";
import likeIcon from "../../assets/likeIcon.svg";
import { setLikeInput, setFillColour } from "./likeManagerSlice";

const LikeButton = () => {
  const dispatch = useDispatch();

  const onLikeInput = (e) => {
    const likeInput = e.target.value;
    dispatch(setLikeInput(likeInput));
    dispatch(setFillColour("red"));
    console.log("clicked");
  };

  return (
    <>
      <img
        className="likeButton"
        onClick={onLikeInput}
        src={likeIcon}
        alt="likeIcon"
      />
    </>
  );
};

export default LikeButton;
