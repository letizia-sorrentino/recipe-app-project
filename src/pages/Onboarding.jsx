import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Onboarding = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="onboardingContainer">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="onboardingButtonsContainer">
        <h1 className="onboardingTitle">Let's get cooking</h1>

        <div>
          <Link to={"home"}>
            <button className="onboardingButton">Start here</button>
          </Link>
        </div>

        <div>
          <Link to={"createAccount"}>
            <button className="onboardingButton">Create an Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;