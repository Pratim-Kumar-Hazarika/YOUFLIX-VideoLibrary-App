import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import { useVideo } from "../Context/VideoProvider";
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
  const {darkMode} = useVideo()
  return (
    <div style={{height:"85vh"}}>
      <div className="login-div">
        {!login && (
          <div className="signupScreen" style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
            border:darkMode ? "1px solid red":""
          }}>
            <form>
              <h2>
              SIGN<span className="text_bold">  IN </span>
              </h2>
              <input
              className="input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                type="text"
                placeholder="Enter Name"
              />
              <input
               className="input"
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
                 <span style={{
                          color: darkMode ? "white" : "black"
                        }}>Not a Member ?</span> 
                        <span className="text_bold" >SIGN UP</span>
                </Link>
              </div>
              <button
                onClick={loginClickHandler}
                className="login-btn"
                style={{ fontWeight: "bold", marginTop: "1rem" }}
              >
                {login ? "Siggned in" : "Sign in"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
