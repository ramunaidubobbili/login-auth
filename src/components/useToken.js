import { useState } from "react";

export default function useToken() {
  sessionStorage.setItem("token", { username: "admin", password: "admin" });
  const getToken = () => {
    sessionStorage.getItem("token");
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    return userToken;
  };
  debugger;
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken.token));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  };
}
