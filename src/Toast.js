import { useEffect } from "react";
import { useVideo } from "./Context/VideoProvider";
import "./toast.css";

export function Toast() {
  const { state, dispatch } = useVideo();
  const hideToast = () => {
    dispatch({ type: "SHOW_TOAST" });
  };
  useEffect(() => {
    const timer = setTimeout(hideToast, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="toast-div">
      <h3 className="toast-messg">{state.toastMessage}</h3>
    </div>
  );
}
