import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../features/account/accountSlice";
import LoginSettings from "../components/LoginSettings";
import LogoutSettings from "../components/LogoutSettings";
import AccountSettings from "../components/AccountSettings";
import "../styles/settings.css";

const Settings = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div className="settingsContainer">
        <div>
          <h1>Settings</h1>
        </div>
        <div className="settingsList">
          {!isLoggedIn ? (
            <LoginSettings />
          ) : (
            <>
              <LogoutSettings />
              <AccountSettings />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Settings;
