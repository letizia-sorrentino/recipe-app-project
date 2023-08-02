import { useState } from "react";
import { validate } from "../../validation/index";
import axios from "axios";
import "../../styles/accountForm.css";

const LogoutForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

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

    //send result to the backend
    if (!result) {
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
        {token ? (
          <p className="userMessage">You are logged out!</p>
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
