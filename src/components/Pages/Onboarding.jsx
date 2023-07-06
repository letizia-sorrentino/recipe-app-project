import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
     
     <div> 
      <Link to={"home"}>
        <button>Start here</button>
      </Link>
      </div>

      <div> 
      <Link to={"createAccount"}>
        <button>Create an Account</button>
      </Link>
      </div>



    </div>
  );
};

export default Onboarding;
