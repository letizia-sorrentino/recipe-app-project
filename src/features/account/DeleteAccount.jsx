import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAccount,
  selectIsLoggedIn,
  selectIsRegistered,
} from "./accountSlice";
import { validate } from "../../validation/index";
import axios from "axios";
import "../../styles/accountForm.css";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const token = localStorage.getItem("token");

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistered = useSelector(selectIsRegistered);

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await validate({ email, password }, "login");
    const user = { email, password };

    //delete account from SQL
    if (!result) {
      try {
        const response = await axios.delete(`http://localhost:6001/account/`, {
          data: user,
          headers: {
            token: token,
          },
        });
        localStorage.removeItem("token");
        console.log(response);
        dispatch(deleteAccount(email));
        dispatch(deleteAccount(password));
        dispatch(deleteAccount(user));
        console.log("account deleted from the store");
      } catch (error) {
        console.log(error);
      }
    }
    setErrors(result);
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
              Delete Account{" "}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default DeleteAccount;
