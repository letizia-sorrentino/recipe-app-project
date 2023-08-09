import { deleteAccount } from "./accountSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../../styles/accountForm.css";

const DeleteAccountButton = () => {
  const dispatch = useDispatch();

  const unregister = async (e) => {
    const token = localStorage.getItem("token");

    //delete account from SQL
    try {
      const response = await axios.delete(`http://localhost:6001/account/`, {
        headers: {
          token: token,
        },
      });
      localStorage.removeItem("token");
      console.log(response);

      dispatch(deleteAccount());
      console.log("account deleted from the store");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="submitButton" type="submit" onClick={unregister}>
        Delete Account
      </button>
    </>
  );
};

export default DeleteAccountButton;
