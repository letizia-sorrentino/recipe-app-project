import heroImage from "../assets/heroImage.png";
import { getRecipesByType } from "../app/recipeAPI";
import { Link } from "react-router-dom";

import "../styles/heroContent.css";
const HeroContent = () => {
  return (
    <div className="heroContainer">
      <div className="heroMessage">
        <h2 className="heroTitle">Easy Dinners</h2>
        <p className="heroDescription">
          Browse our selection of easy and delicious dinner ideas, including
          speedy stir-fries, pasta creations, comforting curries, and hearty
          stews.{" "}
        </p>
      </div>
      <Link className="categoryLink" to={"/searchResults"}>
        <button
          className="heroButton"
          onClick={() => {
            getRecipesByType("dinner");
          }}
        >
          Find recipes{" "}
        </button>
      </Link>
      <div>
        {" "}
        <img className="heroImageMobile" src={heroImage} alt="noodle-bowl" />
      </div>
    </div>
  );
};
export default HeroContent;
