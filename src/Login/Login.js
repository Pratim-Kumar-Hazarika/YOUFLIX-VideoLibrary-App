import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import "./Login.css";

export function Login() {
  const {
    login,
    inputPass,
    loginUserWithCredentials,
    setInputPass,
    inputText,
    setInputText
  } = useAuth();

  const { state } = useLocation();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");

  function loginClickHandler(event) {
    loginUserWithCredentials(inputText, inputPass);
    navigate(state?.from ? state.from : "/");
    if (!login) {
      navigate("/login");
      setInputPass(null);
      setInputText(null);
      event.preventDefault();
      setErrorText("Invalid UserName or Password");
    }
  }
  const userId = JSON.parse(localStorage.getItem("user"));
  console.log(userId);
  return (
    <>
      <div className="login-div">
        {!login && (
          <div className="signupScreen">
            <form>
              <h2>
             <span className="text_bold"> SIGN IN </span>
              </h2>
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
              <div>
                <div>
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {errorText}
                  </span>
                </div>
          
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <span className="text_bold" >Not a Member ?SIGN UP</span>
                </Link>{" "}
              </div>
              <button
                onClick={loginClickHandler}
                className="add-to-chart-btn "
                style={{ fontWeight: "bold", marginTop: "1rem" }}
              >
                {login ? "Siggned in" : "Sign in"}
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
