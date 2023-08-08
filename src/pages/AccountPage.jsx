import CreateAccount from "../features/account/CreateAccount";
import DeleteAccount from "../features/account/DeleteAccount";
import {
  selectIsLoggedIn,
  selectIsRegistered,
} from "../features/account/accountSlice";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistered = useSelector(selectIsRegistered);
  const token = localStorage.getItem("token");

  return (
    <div>
      {!isLoggedIn && !isRegistered && !token ? (
        <CreateAccount />
      ) : (
        <DeleteAccount />
      )}
    </div>
  );
};
export default AccountPage;
