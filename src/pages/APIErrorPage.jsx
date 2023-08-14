const APIErrorPage = () => {
  return (
    <>
      <p className="userMessage">
        {" "}
        You have utilised the maximum API calls for today. Please consider
        trying again tomorrow.
      </p>
    </>
  );
};
export default APIErrorPage;
