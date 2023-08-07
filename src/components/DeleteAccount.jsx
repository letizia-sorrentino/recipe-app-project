import {
  deleteAccount,
  selectIsLoggedIn,
  selectIsRegistered,
} from "../features/account/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../styles/accountForm.css";

const DeleteAccount = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistered = useSelector(selectIsRegistered);

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
      <h1>Delete your Account</h1>

      <div className="accountFormContainer">
        {!isLoggedIn && !isRegistered ? (
          <>
            <p className="userMessage">Your account has been deleted!</p>
          </>
        ) : (
          <>
            <p className="userMessage">
              To delete your account, hit the button:
            </p>
            <button className="submitButton" type="submit" onClick={unregister}>
              Delete Account
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default DeleteAccount;
