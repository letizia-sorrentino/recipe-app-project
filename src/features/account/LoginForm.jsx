import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "../../validation/index";
import { loginSuccess, logoutSuccess } from "./accountSlice";
import axios from "axios";
import { setMessage } from "./accountSlice";
import "../../styles/accountForm.css";
import MessageContainer from "../../components/MessageContainer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    if (!result) {
    //send the validation result to the backend 
      const response = await axios.post(`http://localhost:6001/account/login`, {
        email,
        password,
      });

      console.log("server response", response);
      const status = response.data.status;

      if (status === 1) {
        //dispatch to the store
        localStorage.setItem("token", response.data.token);
        dispatch(loginSuccess(user));
        dispatch(setMessage("You have successfully logged in"));
        navigate("/loggedin");
      } else {
        //handle error messages from the server
        console.log(response);
        dispatch(logoutSuccess(user));
        dispatch(setMessage("Login failed, please try again."));
      }
    }
    setErrors(result);
    console.log("validation error:", result);
  };

  return (
    <div>
      {" "}
      <h1>Login</h1>
      <div className="accountFormContainer">
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
          {errors && (
            <div className="error-message">
              <p>{errors}</p>
            </div>
          )}
        </form>
      </div>
      <div>
        <MessageContainer />
      </div>
    </div>
  );
};

export default LoginForm;
