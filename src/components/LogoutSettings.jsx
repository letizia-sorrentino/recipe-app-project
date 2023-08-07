import { Link } from "react-router-dom";
import { ReactComponent as ForwardArrow } from "../assets/forwardArrow.svg";
import "../styles/settings.css";

const LogoutSettings = () => {
  return (
    <>
      <Link className="settingsLink" to={"/favourites"}>
        <p className="settingsListItem">Saved recipes</p>
        <ForwardArrow className="settingsListArrow" />
      </Link>
      <Link className="settingsLink" to={"/login"}>
        <p className="settingsListItem">Logout</p>
        <ForwardArrow className="settingsListArrow" />
      </Link>
    </>
  );
};

export default LogoutSettings;
