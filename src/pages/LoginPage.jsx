import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../features/account/accountSlice";
import LoginAccount from "../components/LoginAccount";
import LogoutAccount from "../components/LoginAccount";

const LoginPage = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  const token = localStorage.getItem("token");

  return <>{!isLoggedin && !token ? <LoginAccount /> : <LogoutAccount />}</>;
};
export default LoginPage;
