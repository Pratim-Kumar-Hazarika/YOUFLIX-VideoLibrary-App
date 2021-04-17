import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeFetchApi } from "../fakeFetchApi";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const statusOfUser = JSON.parse(localStorage.getItem("login"));
    statusOfUser?.isUserLoggedIn && setLogin(true);
  }, []);

  async function userWithCredentials(username, password) {
    try {
      const response = await fakeFetchApi(username, password);
      if (response.success) {
        console.log(response);
        setLogin(true);
      }
      localStorage.setItem("login", JSON.stringify({ isUserLoggedIn: true }));
    } catch (error) {
      console.log("Error occured", error);
    }
  }
  function logOutHandler() {
    setLogin(false);
    localStorage.removeItem("login");
    navigate("/");
  }
  const [inputText, setInputText] = useState("");
  const [inputPass, setInputPass] = useState("");
  return (
    <AuthContext.Provider
      value={{
        inputPass,
        setInputPass,
        inputText,
        setInputText,
        login,
        userWithCredentials,
        logOutHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
