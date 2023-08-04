import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRegistered,
} from "../features/account/accountSlice";
import AccountForm from "../features/account/AccountForm";
import DeleteAccount from "../features/account/DeleteAccount";
const AccountPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistered = useSelector(selectIsRegistered);
  return (
    <div>
      {!isLoggedIn && !isRegistered ? <AccountForm /> : <DeleteAccount />}
    </div>
  );
};
export default AccountPage;
