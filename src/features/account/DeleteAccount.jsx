import { useDispatch } from "react-redux";
import { deleteAccount } from "./accountSlice";
import axios from "axios";
import "../../styles/accountForm.css";

const DeleteAccount = () => {
  const dispatch = useDispatch();

  const user = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteAccount(user));
  };

  //delete account from SQL

  return (
    <>
      <h1>Delete your account</h1>
      <h2>If you want to delete your account, hit the button:</h2>

      <button className="submitButton" type="submit" onSubmit={handleSubmit}>
        Delete
      </button>
    </>
  );
};

export default DeleteAccount;
