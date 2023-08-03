import { useDispatch, useSelector } from "react-redux";
import { deleteAccount, selectUser } from "./accountSlice";
import axios from "axios";
import "../../styles/accountForm.css";

const DeleteAccount = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(deleteAccount(user));
  };

  //delete account from SQL

  return (
    <>
      <h1>Delete your account</h1>
      <p className="userMessage">
        If you want to delete your account, hit the button:
      </p>
      <button className="submitButton" type="submit" onClick={handleClick}>
        Delete account
      </button>
    </>
  );
};

export default DeleteAccount;
