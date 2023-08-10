import { useDispatch } from "react-redux";
import { logoutSuccess, setMessage } from "./accountSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MessageContainer from "../../components/MessageContainer";
import "../../styles/accountForm.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      dispatch(setMessage("Logout successfull"));
      navigate("/loggedout");
      console.log("logout successfull");
    } catch (error) {
      console.log("logout failed:", error);
      dispatch(setMessage("Logout failed"))

    }
  };

  return (
    <>
      <button className="logoutButton" type="submit" onClick={logout}>
        Logout
      </button>
      <div> <MessageContainer/></div>
    </>
  );
};

export default LogoutButton;
