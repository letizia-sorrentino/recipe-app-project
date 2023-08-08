import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../features/account/accountSlice";
import LoginForm from "../features/account/LoginForm";
import LogoutButton from "../features/account/LogoutButton";

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
          <div className="welcome-message">
            <p className="userMessage">Welcome! </p>
            <p className="userMessage">You are now logged in!</p>
          </div>
          <div>
            <h2>Search for new recipes</h2>
            <p className="userMessage">
              Go to the search page and start saving recipes:
            </p>
          </div>
          <div>
            <h2>Logout</h2>
            <LogoutButton />
          </div>
        </>
      )}
    </>
  );
};
export default LoginAccount;
