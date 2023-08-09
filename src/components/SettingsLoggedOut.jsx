import { Link } from "react-router-dom";
import { ReactComponent as ForwardArrow } from "../assets/forwardArrow.svg";
import "../styles/settings.css";

const SettingsLoggedOut = () => {
  return (
    <>
      <Link className="settingsLink" to={"/login"}>
        <p className="settingsListItem">Login</p>
        <ForwardArrow className="settingsListArrow" />
      </Link>
    </>
  );
};

export default SettingsLoggedOut;
