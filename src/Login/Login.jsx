import React, { useState } from "react";
// import "../AllCss/Login.css";
import "./Login.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Login = () => {
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate(); // useNavigate hook

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return formData.username.trim() !== "" && formData.password.trim() !== "";
  };

  const handleLoginClick = () => {
    if (isFormValid()) {
      // Add login logic here
      navigate("/about");
    } else {
      alert("Iltimos doirani bosib ro'yxatdan o'ting");
    }
  };

  const handleSignupClick = () => {
    alert("Sign Up button clicked!");
  };

  return (
    <div className="wrapper">
      <div className={`login-text ${expanded ? "expand" : ""}`}>
        <button className="cta" onClick={toggleExpand}>
          <i className={`fas fa-chevron-${expanded ? "up" : "down"} fa-1x`}></i>
        </button>
        <div className={`text ${expanded ? "show-hide" : ""}`}>
          <a href="#">Kirish</a>
          <hr />
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <br />
          <button className="login-btn" onClick={handleLoginClick}>
            kirish
          </button>
          <button className="signup-btn" onClick={handleSignupClick}>
            ro'yhatdan o'tish
          </button>
        </div>
      </div>
      <div className="call-text">
        <h1>
        Your health is in <span>safe</span> hands
        </h1>
        <button onClick={handleLoginClick}>Bizga qo'shiling</button>
      </div>
    </div>
  );
};

export default Login;
