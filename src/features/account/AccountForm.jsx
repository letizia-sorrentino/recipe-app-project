import { useState } from "react";
import {
  setStoreEmail,
  setStorePassword,
  createAccount,
  deleteAccount,
  selectIsRegistered,
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

  const isRegistered = useSelector(selectIsRegistered);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const register = async (e) => {
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
    <div>
      {" "}
      <h1>Account</h1>
      <div className="accountFormContainer">
        {!isRegistered ? (<>
          <h2> Create an Account</h2>
          <form className="accountForm" onSubmit={register}>
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
          </>
        ) : (
          <>
            <p className="userMessage">
              Your account has been created! To start saving recipes, login:
            </p>
            <div>
              <Link className="formLink" to={"/login"}>
                <button className="submitButton" type="submit">
                  Login{" "}
                </button>
              </Link>
              <p className="userMessage">
                To delete your account, hit the button:
              </p>
              <button
                className="submitButton"
                type="submit"
                onClick={unregister}
              >
                Delete Account
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountForm;
