import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    console.log("Attempting to login with:", data); // Log the data being sent

    try {
        const url = "http://localhost:5000/api/auth/signin";  // Endpoint for the signin
        const response = await axios.post(url, data); // Make the POST request

        // Log the response from server
        console.log("Login response:", response.data);

        localStorage.setItem("token", response.data.token); // Save the token to localStorage
        localStorage.setItem("LoggedIn", true); // Set LoggedIn status

        setSuccess("Login successful!"); // Display success message
        setTimeout(() => {
            setSuccess("");  // Clear success message after 3 seconds
        }, 3000);

        window.location = "/"; // Redirect to the home page or dashboard
    } catch (error) {
        console.error("Login error:", error.response || error); // Log detailed error

        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
            setError(error.response.data.message); // Set error message from the server response
        } else {
            setError("An unexpected error occurred."); // Set generic error message for other errors
        }

        setTimeout(() => {
            setError(""); // Clear error message after 3 seconds
        }, 3000);
    }
};

  useEffect(() => {
    document.body.classList.add("auth-background");

    return () => {
      document.body.classList.remove("auth-background");
    };
  }, []);

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
            {error && <div className="errorMessage">{error}</div>}
            {success && <div className="successMessage">{success}</div>}
            <button type="submit" className="sign_in_btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here ?</h1>
          <Link to="/register">
            <button type="button" className="sign_up_btn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
