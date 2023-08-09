import AccountForm from "../features/account/AccountForm";
import LoginForm from "../features/account/LoginForm";

const CreateAccountPage = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {" "}
      {!token ? (
        <>
          <h2> Create an Account</h2>
          <div className="accountFormContainer">
            <AccountForm />
          </div>
        </>
      ) : (
        <>
          <h2> Login </h2>
          <div className="accountFormContainer">
            <p className="userMessage">
              Your account has been created! Please login to start saving
              recipes:{" "}
            </p>
            <LoginForm />
          </div>
        </>
      )}
    </>
  );
};
export default CreateAccountPage;
