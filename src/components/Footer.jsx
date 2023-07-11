import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "../navigation/Nav";
const Footer = () => {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowNav(location.pathname !== "/");
  }, [location]);

  return (
    <>
      {showNav && <Nav />}
      {!showNav && <div></div>}
    </>
  );
};

export default Footer;
