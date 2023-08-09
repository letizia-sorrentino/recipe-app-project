import DeleteAccountButton from "../features/account/DeleteAccountButton";
import "../styles/accountForm.css";
import LoginForm from "../features/account/LoginForm";

const DeleteAccountPage = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {!token ? (
        <>
          <h1>Delete your Account</h1>
          <div className="accountFormContainer">
            <p className="userMessage">To delete your account, first log in:</p>
            <LoginForm />
          </div>
        </>
      ) : (
        <>
          <h1>Delete your Account</h1>
          <div className="accountFormContainer">
            <p className="userMessage">
              To delete your account, hit the button:
            </p>
            <DeleteAccountButton />
          </div>
        </>
      )}
    </>
  );
};

export default DeleteAccountPage;
