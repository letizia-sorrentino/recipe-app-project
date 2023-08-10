import { useState } from "react";
import {
  setStoreEmail,
  setStorePassword,
  createAccount,
  setMessage,
} from "./accountSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "../../validation/index";
import axios from "axios";
import MessageContainer from "../../components/MessageContainer";
import "../../styles/accountForm.css";

const AccountForm = () => {
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

  const register = async (e) => {
    e.preventDefault();

    const result = await validate({ email, password }, "createAccount");
    const user = { email, password };

    if (!result) {
      //create account in SQL
      const response = await axios.post(
        `http://localhost:6001/account/register`,
        { email, password }
      );
      console.log("server response", response);
      const status = response.data.status;

      if (status === 1) {
        //dispatch to the store
        dispatch(setStoreEmail(email));
        dispatch(setStorePassword(password));
        dispatch(createAccount(user));
        dispatch(setMessage("account successfully created!"));
        navigate("/new");
      } else {
        //handle error messages from the server
        console.log(response.data.status);
        dispatch(setMessage("Account not created, please try again."));
      }
    }

    setErrors(result);
    console.log("validation error:", result);
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

      <div>
        <MessageContainer />
      </div>
    </div>
  );
};

export default AccountForm;
