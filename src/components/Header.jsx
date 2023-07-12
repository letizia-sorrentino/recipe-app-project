import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
      <Link className="homepageLink" to={"/home"}>

      <div className="mainLogoContainer">
        <RecipeAppLogo className="mainLogo" />
      </div>
      </Link>
    </div>
  );
};

export default Header;
