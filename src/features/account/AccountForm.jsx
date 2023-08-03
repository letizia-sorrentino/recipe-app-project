import { useState } from "react";
import {
  setStoreUsername,
  setStoreEmail,
  setStorePassword,
} from "./accountSlice";
import { useDispatch } from "react-redux";
import { validate } from "../../validation/index";
import axios from "axios";
import "../../styles/accountForm.css";

const AccountForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await validate(
      { username, email, password },
      "createAccount"
    );
    if (!result) {
      dispatch(setStoreUsername(username));
      dispatch(setStoreEmail(email));
      dispatch(setStorePassword(password));
      //console.log(username, email, password);

      const response = await axios.post(
        `http://localhost:6001/account/register`,
        { username, email, password }
      );
      console.log(response.data);
    }
    setErrors(result);
    //console.log(result);
  };

  const account = { username, email, password };

  return (
    <div>
      {" "}
      <h1>Create an Account</h1>
      <div className="accountFormContainer">
        {account ? (
          <form className="accountForm" onSubmit={handleSubmit}>
            <div className="usernameFormContainer">
              <label>Username: </label>
              <input
                className="usernameInput"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
              {errors && <p>{errors.username}</p>}
            </div>

            <div className="emailFormContainer">
              <label>Email: </label>
              <input
                className="emailInput"
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {errors && <p>{errors.email}</p>}
            </div>

            <div className="passwordFormContainer">
              <label>Password: </label>
              <input
                className="passwordInput"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {errors && <p>{errors.password}</p>}
            </div>

            <button className="submitButton" type="submit">
              Create Account{" "}
            </button>
          </form>
        ) : (
          <>
            <p className="userMessage">Account created!</p>
            <button className="submitButton" type="submit">
              Delete Account{" "}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountForm;
