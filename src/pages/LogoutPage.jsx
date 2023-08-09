import LogoutButton from "../features/account/LogoutButton";
import LoginForm from "../features/account/LoginForm";

const LogoutPage = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token ? (
        <>
          <h1>Logout</h1>
          <div className="accountFormContainer">
            <p className="userMessage">You are now logged out. To login:</p>
            <LoginForm />
          </div>
        </>
      ) : (
        <>
          <h1>Logout</h1>
          <div className="accountFormContainer">
            <p className="userMessage">To logout, hit the button:</p>
            <LogoutButton />
          </div>
        </>
      )}
    </>
  );
};
export default LogoutPage;
