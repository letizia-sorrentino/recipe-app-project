import { useDispatch } from "react-redux";
import { logoutSuccess } from "./accountSlice";
import axios from "axios";
import "../../styles/accountForm.css";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    const token = localStorage.getItem("token");

    try {
      const result = await axios.delete(
        `http://localhost:6001/account/logout`,
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(token, result);
      localStorage.removeItem("token");
      console.log(result);
      dispatch(logoutSuccess());
      console.log("logout");
    } catch (error) {
      console.log("logout failed:", error);
    }
  };

  return (
    <>
      <button className="logoutButton" type="submit" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
