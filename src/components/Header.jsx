import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GoBackButton from "./GoBackButton";
import { ReactComponent as RecipeAppLogo } from "../assets/RecipeAppLogo.svg";
import "../styles/header.css";

const Header = () => {
  const [showGoBackButton, setShowGoBackButton] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowGoBackButton(location.pathname !== "/");
  }, [location]);

  return (
    <div className="headerContainer">
      {showGoBackButton && (
        <div className="goBackButtonContainer">
          <GoBackButton />
        </div>
      )}
      {!showGoBackButton && <div className="goBackButtonContainer"></div>}

      <div className="mainLogoContainer">
        <RecipeAppLogo className="mainLogo" />
      </div>
    </div>
  );
};

export default Header;
