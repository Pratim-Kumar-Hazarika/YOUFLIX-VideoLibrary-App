import { useEffect } from "react";
import { useVideo } from "../Context/VideoProvider";
import "./toast.css";

export function Toast() {
  const { toastMessage, dispatch } = useVideo();
  const hideToast = () => {
    dispatch({ type: "SHOW_TOAST" });
  };
  useEffect(() => {
    const time = setTimeout(hideToast, 3000);
    return () => clearTimeout(time);
  }, []);
  return (
    <div className="toast-div">
      <span className="toast-message">{toastMessage}</span>
    </div>
  );
}
