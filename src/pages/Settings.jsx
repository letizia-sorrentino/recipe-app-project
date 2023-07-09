import { Link } from "react-router-dom";
import "../styles/settings.css"

const Settings = () => {
  return (
    <>
      <div className="settingsContainer">
        <h1>Settings</h1>
        <div>
          <Link className="settingsLink" to={"/createAccount"}>
            <p>Create an Account</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Settings;
