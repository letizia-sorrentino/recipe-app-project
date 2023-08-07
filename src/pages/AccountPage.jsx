import CreateAccount from "../components/CreateAccount";
import DeleteAccount from "../components/DeleteAccount";
import {
  selectIsLoggedIn,
  selectIsRegistered,
} from "../features/account/accountSlice";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistered = useSelector(selectIsRegistered);

  return (
    <div>
      {!isLoggedIn && !isRegistered ? <CreateAccount /> : <DeleteAccount />}
    </div>
  );
};
export default AccountPage;
