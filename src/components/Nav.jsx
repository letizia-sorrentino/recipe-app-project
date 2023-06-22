import { Link } from "react-router-dom";

const Nav = () => {
    return <div className="navbar"> 
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/search">Search</Link>
        <Link className="navLink" to="/favourites">Favourites</Link>
        <Link className="navLink" to="/settings">Settings</Link>
      </div>;
  };
  
  export default Nav;