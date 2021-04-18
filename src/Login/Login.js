import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import { useVideo } from "../Context/VideoProvider";
import { LeftBar } from "../LeftNavBar/LeftBar";
import "./Login.css";

export function Login() {
  const {
    login,
    userWithCredentials,
    inputPass,
    setInputPass,
    inputText,
    setInputText
  } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div style={{ padding: "1rem", marginTop: "3rem" }}>
        <LeftBar />
      </div>
      <div className="login-div">
        <div className="signupScreen">
          <form>
            <h1 style={{ color: "white" }}>Sign In</h1>

            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              type="text"
              placeholder="Enter Email"
            />

            <input
              value={inputPass}
              onChange={(e) => setInputPass(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />

            <button type="submit" onClick={loginClickHandler}>
              {login ? "Logged In" : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </>
  );

  function loginClickHandler() {
    userWithCredentials(inputText, inputPass);
    navigate(state?.from ? state.from : "/");
  }
}
