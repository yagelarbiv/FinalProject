import axios from "axios";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    console.log(name, password);
    try {
      await axios.post("https://localhost:6001/api/auth/login", {
        UserName: userName,
        Password: password,
      })
      .then(function (response) {
        localStorage.setItem("User", JSON.stringify({
          username: jwtDecode(response.data.accessToken)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
          AccessToken: response.data.accessToken,
          RefreshToken: response.data.refreshToken
        }));
        navigate("/");
      })
    } catch (err) {
      console.log(err);
    }
  }
    return (
      <>
        <div>
          <h1>Log In</h1>
          <p>if you are already registered go to the <Link to="/register">SignUp</Link> Page</p>
          <form method="POST">
            <label htmlFor="username">UserName</label>
            <input name="username" id="username" type="text" onChange={(e) => setName(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button disabled={!password || !userName } type="submit" onClick={submit}>Log In</button>
          </form>
        </div>
      </>
    );

}

export default LogIn;
