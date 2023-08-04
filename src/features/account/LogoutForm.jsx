import { useState } from "react";
import { validate } from "../../validation/index";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess, selectIsLoggedIn } from "./accountSlice";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/accountForm.css";

const LogoutForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const isLoggedin = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await validate({ email, password }, "login");
    const user = { email, password };

    //send result to the backend
    if (!result) {
      dispatch(logoutSuccess(user));
      console.log("logout");

      try {
        const result = await axios.post(
          `http://localhost:6001/account/logout`,
          {
            email,
            password,
          },
          {
            headers: {
              token: token,
            },
          }
        );
        localStorage.removeItem("token");
        console.log(result);
      } catch (error) {
        console.log("logout failed:", error);
      }
    }
    setErrors(result);
  };

  return (
    <div>
      <h1>Logout</h1>
      <div className="accountFormContainer">
        {!isLoggedin ? (
          <>
            <p className="userMessage">You are logged out!</p>
            <Link className="settingsLink" to={"/login"}>
              <button className="submitButton" type="submit">
                Login
              </button>
            </Link>
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
              Logout
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LogoutForm;
