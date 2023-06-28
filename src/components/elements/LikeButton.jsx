import likeIcon from "../../assets/likeIcon.svg";

const LikeButton = () => {
  return (
    <div>
      <img
        className="likeButton"
        //onClick={(e) => console.log("onClick")}
        src={likeIcon}
        alt="likeIcon"
      />
    </div>
  );
};

export default LikeButton;
