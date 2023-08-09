import SettingsLoggedIn from "../components/SettingsLoggedOut";
import SettingsLoggedOut from "../components/SettingsLoggedIn";
import "../styles/settings.css";

const Settings = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="settingsContainer">
        <div>
          <h1>Settings</h1>
        </div>
        <div className="settingsList">
          {token && <SettingsLoggedOut />}
          {!token && <SettingsLoggedIn />}
        </div>
      </div>
    </>
  );
};

export default Settings;
