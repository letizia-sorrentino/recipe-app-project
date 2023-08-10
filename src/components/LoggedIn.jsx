import SearchBar from "../features/search/SearchBar";
import RecipesList from "../features/recipes/RecipesList";
import DeleteAccountButton from "../features/account/DeleteAccountButton";

const LoggedIn = () => {
  return (
    <>
      <div>
        <h1>Hello!</h1>
        <p className="userMessage">You are logged in! Search new recipes here:</p>
        <SearchBar />
        <RecipesList />
      </div>

      <div>
        <h2>Delete your Account</h2>
        <div className="accountFormContainer">
          <p className="userMessage">To delete your account, hit the button:</p>
          <DeleteAccountButton />
        </div>
      </div>
    </>
  );
};

export default LoggedIn;
