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

    //logout account from SQL
    const response = await axios.delete(
      `http://localhost:6001/account/logout`,
      {
        headers: {
          token: token,
        },
      }
    );
    console.log("Server response", response, "token", token);

    const status = response.data.status;

    if (status === 1) {
      //remove token and dispatch to the store
      localStorage.removeItem("token");
      dispatch(logoutSuccess());
      dispatch(setMessage("Logout successfull"));
      navigate("/loggedout");
      console.log("logout successfull");
    } else {
      console.log("logout failed:", response);
      dispatch(setMessage("Logout failed, please try again"));
    }
  };

  return (
    <>
      <button className="logoutButton" type="submit" onClick={logout}>
        Logout
      </button>
      <div>
        {" "}
        <MessageContainer />
      </div>
    </>
  );
};

export default LogoutButton;
