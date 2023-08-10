import SearchBar from "../features/search/SearchBar";
import RecipesList from "../features/recipes/RecipesList";
import DeleteAccountButton from "../features/account/DeleteAccountButton";

const LoggedIn = () => {
  return (
    <>
      <div>
        <p className="userMessage">You are logged in. Start saving recipes:</p>
        <SearchBar />
        <RecipesList />
      </div>

      <div>
        <h1>Delete your Account</h1>
        <div className="accountFormContainer">
          <p className="userMessage">To delete your account, hit the button:</p>
          <DeleteAccountButton />
        </div>
      </div>
    </>
  );
};

export default LoggedIn;
