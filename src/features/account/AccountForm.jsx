import { useState } from "react";
import { setStoreUsername, setStorePassword } from "./accountSlice";
import { useDispatch } from "react-redux";
import "../../styles/accountForm.css";

const AccountForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setStoreUsername(username));
    dispatch(setStorePassword(password));
    console.log(username, password);
  };
  return (
    <div>
      {" "}
      <h1>Create an Account</h1>
      <div className="accountFormContainer">
        <form className="accountForm" onSubmit={handleSubmit}>
          <div className="usernameFormContainer">
            <label>Username: </label>
            <input
              className="usernameInput"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="passwordFormContainer">
            <label>Password: </label>
            <input
              className="passwordInput"
              type="text"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button className="submitButton" type="submit">
            Create Account{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountForm;
