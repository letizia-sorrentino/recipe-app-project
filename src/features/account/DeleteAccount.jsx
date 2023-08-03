import axios from "axios";
import "../../styles/accountForm.css";

const DeleteAccount = () => {
  return (
    <>
      <h1>Delete your account</h1>
      <h2>If you want to delete your account, hit the button:</h2>

      <button className="submitButton" type="submit">
        Delete
      </button>
    </>
  );
};

export default DeleteAccount;
