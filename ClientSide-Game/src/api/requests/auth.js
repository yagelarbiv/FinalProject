<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
const authUrl = import.meta.env.VITE_APP_AUTH_URL

export const LogOut = async (e) => {
  e.preventDefault();
  const navigate = useNavigate();
  try {
    await axios
    .delete(authUrl + "/logout", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("User").RefreshToken,
      },
    })
    .then((response) => {
      console.log(response);
      localStorage.removeItem("User");
      navigate("/");
    });
=======
=======
>>>>>>> 8bf81138cbffe1e1a046f97bccc40ca7af0cee31
import { api } from "../axios.js";
const authUrl = import.meta.env.VITE_APP_AUTH_URL;

export const logOut = async (e) => {
  e.preventDefault();
  try {
    await axios
      .delete(authUrl + "/logout", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("User").RefreshToken,
        },
      })
      .then((response) => {
        console.log(response);
        localStorage.removeItem("User");
        navigate("/");
      });
<<<<<<< HEAD
>>>>>>> 8bf81138cbffe1e1a046f97bccc40ca7af0cee31
=======
>>>>>>> 8bf81138cbffe1e1a046f97bccc40ca7af0cee31
  } catch (err) {
    console.log(err);
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
export const Registration = async (e, userName, password, confirmPassword) => {
  e.preventDefault();
  const navigate = useNavigate();
  console.log(userName, password);
  try {
    await axios.post(authUrl+"/register", {
      UserName: userName,
      Password: password,
      ConfirmPassword: confirmPassword
    })
    .then(function (response) {
      console.log(response.data.accessToken);
      localStorage.setItem("User", JSON.stringify({
        username: jwtDecode(response.data.accessToken)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        AccessToken: response.data.accessToken,
        RefreshToken: response.data.refreshToken
      }));
      console.log(JSON.parse(localStorage.getItem("User")));
      navigate("/");
    })
    .catch(function (error) {
      console.log(error);
    });
  } catch (err) {
    console.log(err);
  }
=======
=======
>>>>>>> 8bf81138cbffe1e1a046f97bccc40ca7af0cee31

export const LogingIn = async (e) => {
    e.preventDefault();
    try {
      await axios.post(authUrl+"/login", {
        UserName: userName,
        Password: password,
      })
      .then(function (response) {
        localStorage.setItem("User", {
          username: jwtDecode(response.data.accessToken)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
          AccessToken: response.data.AccessToken,
          RefreshToken: response.data.RefreshToken
        });
        navigate("/");
      })
    } catch (err) {
      console.log(err);
    }
}

export const Registeration = async (e) => {
    e.preventDefault();
    console.log(userName, password);
    try {
      await axios.post(authUrl+"/register", {
        UserName: userName,
        Password: password,
        ConfirmPassword: confirmPassword
      })
      .then(function (response) {
        console.log(response.data.accessToken);
        localStorage.setItem("User", JSON.stringify({
          username: jwtDecode(response.data.accessToken)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
          AccessToken: response.data.accessToken,
          RefreshToken: response.data.refreshToken
        }));
        console.log(JSON.parse(localStorage.getItem("User")));
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (err) {
      console.log(err);
    }
<<<<<<< HEAD
>>>>>>> 8bf81138cbffe1e1a046f97bccc40ca7af0cee31
=======
>>>>>>> 8bf81138cbffe1e1a046f97bccc40ca7af0cee31
}