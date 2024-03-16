import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openSession } from "../features/session/sessionSlice.js";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const session = useSelector((state) => state.session);
  const [btntxt, setBtntxt] = useState("Login");
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (username && password) {
      const found = users.find((u) => {
        return u.name === username && u.password === password;
      });
      if (found) {
        console.log(found.name + " was found!");
        setBtntxt("Redirecting...");
        setTimeout(() => {
          dispatch(openSession({ id: found.id, name: found.name }));
          navigate("/");
        }, 1500);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login To Continue</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="off"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{btntxt}</button>
          {loading ? <CircularProgress className="circ-prog" /> : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
