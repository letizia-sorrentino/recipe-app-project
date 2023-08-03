import { selectUser } from "../features/account/accountSlice";
import AccountForm from "../features/account/AccountForm";
import DeleteAccount from "../features/account/DeleteAccount";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const user = useSelector(selectUser);

  return <div>{!user ? <AccountForm /> : <DeleteAccount />}</div>;
};
export default AccountPage;
