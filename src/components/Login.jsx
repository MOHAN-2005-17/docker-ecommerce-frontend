import React, { useState } from "react";
import { login } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [identifier, setIdentifier] = useState(""); // can be username or email
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(identifier, password); // backend should accept username or email
      localStorage.setItem("isAuthenticated", "true");
      window.dispatchEvent(new Event("storage"));
      navigate("/");
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="center-layout">
      <div className="auth-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username or Email"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
