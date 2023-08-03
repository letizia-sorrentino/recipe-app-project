import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { validate } from "../../validation/index";
import { loginSuccess, selectUser } from "./accountSlice";
import axios from "axios";
import "../../styles/accountForm.css";

const LoginForm = () => {
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


  return (
    <div>
      {" "}
      <h1>Login</h1>
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
              Login{" "}
            </button>
          </form>
        ) : (
          <p className="userMessage">You are logged in!</p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
