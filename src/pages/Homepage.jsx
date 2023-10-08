import RecipesList from "../components/RecipesList";
import HeroContent from "../components/HeroContent";
import RecipesByDiet from "../components/RecipesByDiet";
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <>
      <HeroContent />

      <RecipesByDiet />

      <div className="popularRecipes">
        <h2>Popular Recipes</h2>
        <RecipesList />
      </div>
    </>
  );
};

export default Homepage;
