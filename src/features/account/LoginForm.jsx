import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../validation/index";
import { loginSuccess, logoutSuccess, selectIsLoggedIn } from "./accountSlice";
import axios from "axios";
import "../../styles/accountForm.css";

const LoginForm = () => {
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

  const login = async (e) => {
    e.preventDefault();
    const result = await validate({ email, password }, "login");
    const user = { email, password };

    //send result to the backend and dispatch to the store
    if (!result) {
      dispatch(loginSuccess(user));

      const result = await axios.post(`http://localhost:6001/account/login`, {
        email,
        password,
      });

      localStorage.setItem("token", result.data.token);
      console.log(result);
    }
    setErrors(result);
    //console.log(result);
  };

  const logout = async () => {
    const token = localStorage.getItem("token");

    try {
      const result = await axios.delete(
        `http://localhost:6001/account/logout`,
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(token, result);
      localStorage.removeItem("token");
      console.log(result);
      dispatch(logoutSuccess());
      console.log("logout");
    } catch (error) {
      console.log("logout failed:", error);
    }
  };

  return (
    <div>
      {" "}
      <h1>Login</h1>
      <div className="accountFormContainer">
        {!isLoggedin ? (
          <form className="accountForm" onSubmit={login}>
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
              Login{" "}
            </button>
          </form>
        ) : (
          <>
            <p className="userMessage">You are logged in!</p>
            <button className="submitButton" type="submit" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
