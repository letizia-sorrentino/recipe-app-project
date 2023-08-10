import { deleteAccount, setMessage } from "./accountSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MessageContainer from "../../components/MessageContainer";
import "../../styles/accountForm.css";

const DeleteAccountButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const unregister = async (e) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(
        setMessage("To delete your account, please go to settings and login.")
      );
    }

    //delete account from SQL
    const response = await axios.delete(`http://localhost:6001/account/`, {
      headers: {
        token: token,
      },
    });
    console.log("server response", response);

    const status = response.data.status;

    if (status === 1) {
      //dispatch to the store
      localStorage.removeItem("token");
      dispatch(deleteAccount());
      dispatch(setMessage("Your account has been deleted"));
      navigate("/deleted");
      console.log("account deleted from the store");
    } else {
      //handle error messages from the server
      console.log(response);
      dispatch(
        setMessage(
          "There was a problem deleting your account, please try again."
        )
      );
    }
  };

  return (
    <>
      <button className="submitButton" type="submit" onClick={unregister}>
        Delete Account
      </button>
      <div>
        <MessageContainer />{" "}
      </div>
    </>
  );
};

export default DeleteAccountButton;
