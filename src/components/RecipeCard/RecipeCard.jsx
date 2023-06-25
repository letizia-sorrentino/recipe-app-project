import React from "react";
import Image from "./Image";
import Title from "./Title";

const RecipeCard = (props) => {
  const { image, title } = props;
  return (
    <div>
      <Image image={image} title={title}/>
      <Title title={title} />
    </div>
  );
};

export default RecipeCard;
