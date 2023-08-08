import { useSelector } from "react-redux";
import { selectIsRegistered } from "./accountSlice";
import AccountForm from "./AccountForm";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const isRegistered = useSelector(selectIsRegistered);
  const token = localStorage.getItem("token");

  return (
    <>
      <h2> Create an Account</h2>
      <div className="accountFormContainer">
        {!isRegistered && !token ? (
          <AccountForm />
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
              </Link>{" "}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CreateAccount;
