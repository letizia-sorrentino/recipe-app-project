import { useState } from "react";
import {
  setStoreEmail,
  setStorePassword,
  createAccount,
  selectUser,
} from "./accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../validation/index";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/accountForm.css";

const AccountForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await validate({ email, password }, "createAccount");
    const user = { email, password };

    if (!result) {
      dispatch(setStoreEmail(email));
      dispatch(setStorePassword(password));
      dispatch(createAccount(user));
      //console.log(email, password);

      //create account in SQL
      const response = await axios.post(
        `http://localhost:6001/account/register`,
        { email, password }
      );
      console.log(response.data);
    }
    setErrors(result);
    //console.log(result);
  };

  return (
    <div>
      {" "}
      <h1>Create an Account</h1>
      <div className="accountFormContainer">
        {!user ? (
          <form className="accountForm" onSubmit={handleSubmit}>
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
            <p className="userMessage">To start saving recipes, please log in:</p>

            <Link className="settingsLink" to={"/login"}>
            <button className="submitButton" type="submit">
              Login{" "}
            </button>
          </Link>
          
          </>
        )}
      </div>
    </div>
  );
};

export default AccountForm;
