import { useSelector } from "react-redux";
import { selectAllRecipes } from "../../features/recipes/recipeManagerSlice";
import RemoveButton from "./RemoveButton";

const SavedRecipe = () => {
  const favourites = useSelector(selectAllRecipes);
  console.log(favourites);

  const renderedFavouriteRecipes =
    Array.isArray(favourites) &&
    favourites.map((item) => (
      <div className="recipeListContainer" key={item.id}>
        <div className="recipeTile">
          <img className="recipeImage" src={item.image} alt={item.title} />
          <div className="recipeListInfo">
            <h2 className="recipeTitle">{item.title}</h2>
            <RemoveButton />
          </div>
        </div>
      </div>
    ));

  return <section>{renderedFavouriteRecipes}</section>;
};
export default SavedRecipe;
