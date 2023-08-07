import { Link } from "react-router-dom";
import { ReactComponent as ForwardArrow } from "../assets/forwardArrow.svg";
import "../styles/settings.css";

const AccountSettings = () => {
  return (
    <>
      <Link className="settingsLink" to={"/account"}>
        <p className="settingsListItem">Account</p>
        <ForwardArrow className="settingsListArrow" />
      </Link>
    </>
  );
};

export default AccountSettings;
