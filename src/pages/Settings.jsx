import { Link } from "react-router-dom";
import { ReactComponent as ForwardArrow } from "../assets/forwardArrow.svg";

import "../styles/settings.css"

const Settings = () => {
  return (
    <>
      <div className="settingsContainer">
        <h1>Settings</h1>
        <div className="settingsList">
          <Link className="settingsLink" to={"/createAccount"}>
            <p className="settingsListItem">Create an Account</p>
            <ForwardArrow className="settingsListArrow"/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Settings;
