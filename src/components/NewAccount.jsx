import LoginForm from "./LoginForm";

const NewAccount = () => {
  return (
    <>
      <h1>Welcome to Love Food</h1>
      <p className="userMessage">Your account has been successfully created.</p>

      <p className="userMessage">Login to start saving recipes</p>
      <LoginForm />
    </>
  );
};

export default NewAccount;
