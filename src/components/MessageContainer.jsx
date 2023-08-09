import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage, setMessage } from "../features/account/accountSlice";
import { ToastContainer, toast } from "react-toastify";
import "../styles/messageContainer.css";

const MessageContainer = () => {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!message) return;
    toast(message);
    dispatch(setMessage(""));
  }, [message]);

  return <ToastContainer />;
};
export default MessageContainer;
