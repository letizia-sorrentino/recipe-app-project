import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../features/account/accountSlice";
import LoginForm from "../features/account/LoginForm";
import LogoutButton from "../features/account/LogoutButton";
import SearchBar from "../features/search/SearchBar";
import RecipesList from "../features/recipes/RecipesList";

const LoginAccount = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  const token = localStorage.getItem("token");

  return (
    <>
      {!isLoggedin && !token ? (
        <>
          <LoginForm />
        </>
      ) : (
        <>
          <div className="welcomeMessage">
            <h2>Login:</h2>
            <p className="userMessage">You are now logged in! </p>
          </div>
          <div>
            <h2>Search for new recipes</h2>
            <p className="userMessage">Start saving recipes:</p>
            <SearchBar />
            <RecipesList />
          </div>
          <div>
            <h2>Logout here:</h2>
            <LogoutButton />
          </div>
        </>
      )}
    </>
  );
};
export default LoginAccount;
