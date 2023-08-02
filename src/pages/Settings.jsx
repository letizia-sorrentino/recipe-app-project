import { Link } from "react-router-dom";
import { ReactComponent as ForwardArrow } from "../assets/forwardArrow.svg";
import "../styles/settings.css";

const Settings = () => {
  return (
    <>
      <div className="settingsContainer">
        <div>
          <h1>Settings</h1>
        </div>
        <div className="settingsList">
          <Link className="settingsLink" to={"/account"}>
            <p className="settingsListItem">Account</p>
            <ForwardArrow className="settingsListArrow" />
          </Link>
         
          <Link className="settingsLink" to={"/favourites"}>
            <p className="settingsListItem">Saved recipes</p>
            <ForwardArrow className="settingsListArrow" />
          </Link>

          <Link className="settingsLink" to={"/login"}>
            <p className="settingsListItem">Login</p>
            <ForwardArrow className="settingsListArrow" />
          </Link>
    
          <Link className="settingsLink" to={"/logout"}>
            <p className="settingsListItem">Logout</p>
            <ForwardArrow className="settingsListArrow" />
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Settings;
