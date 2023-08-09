import LoginForm from "../features/account/LoginForm";
import SearchBar from "../features/search/SearchBar";
import RecipesList from "../features/recipes/RecipesList";
const LoginPage = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {" "}
      {!token ? (
        <LoginForm />
      ) : (
        <>
          <p className="userMessage">
            You are logged in and can now start saving recipes!
          </p>
          <SearchBar />
          <RecipesList />
        </>
      )}
    </>
  );
};
export default LoginPage;
