import React, { useState } from "react";
import axios from "axios";
import "./Styles/Login.css";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
    appType: "music",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://academics.newtonschool.co/api/v1/user/login", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };
  return (
    <div className="Login-section">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label htmlFor="appType">App Type</label>
        <select name="appType" onChange={handleChange} id="appType" required>
          <option value="music">music</option>
          <option value="album">album</option>
        </select><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
