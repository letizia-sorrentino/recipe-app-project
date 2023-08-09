import { useState } from "react";
import {
  setStoreEmail,
  setStorePassword,
  createAccount,
  setMessage,
  selectMessage,
} from "./accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../validation/index";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/accountForm.css";

const AccountForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

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

      //create account in SQL
      const response = await axios.post(
        `http://localhost:6001/account/register`,
        { email, password }
      );
      console.log(response.data);
    }
    setErrors(result);
  };

  return (
    <div>
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
    </div>
  );
};

export default AccountForm;
