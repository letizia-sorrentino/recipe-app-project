import { useState } from "react";
import { validate } from "../../validation/index";
import axios from "axios";
import "../../styles/accountForm.css";

const LoginAccountForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await validate({ email, password }, "login");

  //send result to the backend
    if (!result) {
      //console.log(email, password);
      const result = await axios.post(`http://localhost:6001/account/login`, {
        email,
        password,
      });
      console.log(result);
      localStorage.setItem("token", result.data.token);
    }
    setErrors(result);
    //console.log(result);
  };

  return (
    <div>
      {" "}
      <h1>Login</h1>
      <div className="accountFormContainer">
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
      </div>
    </div>
  );
};

export default LoginAccountForm;
