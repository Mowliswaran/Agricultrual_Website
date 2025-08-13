import { useState } from "react";
import "./Login.css";
import { FaGoogle, FaMicrosoft, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Login({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("❌ Please fill in all fields!");
      return;
    }
    if (email === "admin@example.com" && password === "12345") {
      setMessage("✅ Login successful!");
    } else {
      setMessage("❌ Invalid credentials, try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="padd">
          Don't have an account?{" "}
          <span onClick={onSwitch} className="link-text" style={{ cursor: "pointer" }}>
            Sign up
          </span>
        </p>
      </form>

      <div className="signlogo">
        <FaGoogle className="ic" />
        <FaMicrosoft className="ic" />
        <FaGithub className="ic" />
        <FaLinkedin className="ic" />
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  );
}
