import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../Context/VideoProvider";
import "./Login.css";
export function SignUp() {
  const navigate = useNavigate();
  const {darkMode}= useVideo()
  async function signUpClickHandler(event) {
    event.preventDefault();
    try {
      const res = await axios.post(
        "https://YouFlixBackend.prratim.repl.co/users",
        {
          name: inputName,
          password: inputPass,
          email: inputEmail
        }
      );
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      setEmailError("Please Enter Valid Email");
      console.log("error", error);
    }
  }
  const [inputName, setInputName] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  return (
    <div style={{height:"85vh"}}>
      <div className="login-div">
        <div className="signupScreen" style={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
          border:darkMode ? "1px solid red":""
        }}>
          <form>
            <h1>
           <span   style={{
          color: darkMode ? "white" : "black"
         }}>SIGN</span><span className="text_bold"> UP</span>
            </h1>
            <input
             className="input"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              type="text"
              placeholder="Enter Name"
            />
            <input
             className="input"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              type="text"
              placeholder="Enter Email"
            />
            <input
             className="input"
              value={inputPass}
              onChange={(e) => setInputPass(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
            <div>
              <span style={{ color: "red", fontWeight: "bold" }}>
                {emailError}
              </span>
            </div>
            <button
              onClick={signUpClickHandler}
              className="login-btn "
              style={{ fontWeight: "bold" }}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
