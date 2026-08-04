import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { message } from "antd";
import axios from "axios";

const AuthContext = createContext();

const initialState = { isAuth: false, user: {} };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LOGIN":
      return {
        isAuth: true,
        user: payload.user,
      };

    case "SET_PROFILE":
      return {
        ...state,
        user: payload.user,
      };

    case "SET_LOGOUT":
      return initialState;

    default:
      return state;
  }
};

const Auth = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAppLoading, setIsAppLoading] = useState(true);

  const readProfile = (token) => {
    const jwt = token || localStorage.getItem("jwt");
    // If no token exists, end loading immediately
    if (!jwt) {
      setIsAppLoading(false);
      return;
    }

    axios.get("/api/auth/user", { headers: { Authorization: `Bearer ${jwt}` }, })
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          dispatch({ type: "SET_LOGIN", payload: { user: data.user} })
          console.log("user logged in successfully...!!!", data.user);

        }
      })
      .catch((error) => {
        console.error("Failed to read profile:", error);
      })
      .finally(() => {
        setIsAppLoading(false);
      });
  };

  useEffect(() => {
    readProfile();
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("jwt");
    dispatch({ type: "SET_LOGOUT" });
    message.success("Logout Successful");
  };

  return (
    <AuthContext.Provider value={{ ...state,isAppLoading, handleLogout, readProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;

export const useAuth = () => useContext(AuthContext);