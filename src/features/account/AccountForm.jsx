import { useState } from "react";
import { setStoreUsername, setStorePassword } from "./accountSlice";
import { useDispatch, useSelector } from "react-redux";
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
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>

        <div>
          <label>Password:</label>
          <input type="text" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Create Account </button>
      </form>
    </div>
  );
};

export default AccountForm;
