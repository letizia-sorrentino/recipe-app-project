import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../features/account/accountSlice";
import LoginForm from "../features/account/LoginForm";
import LogoutButton from "../features/account/LogoutButton";

const LogoutAccount = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  const token = localStorage.getItem("token");

  return (
    <>
      {!isLoggedin && !token ? (
        <>
          <p className="userMessage">You are logged in!</p>
          <LogoutButton />
        </>
      ) : (
        <>
          {" "}
          <LoginForm />
        </>
      )}
    </>
  );
};
export default LogoutAccount;
