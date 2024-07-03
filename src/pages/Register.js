import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth/signup";
      const { data: res } = await axios.post(url, data);
      setSuccess("Registration successful!"); // Set success message
      setTimeout(() => {
        setSuccess(""); // Clear success message after 3 seconds
      }, 3000);
      navigate("/login", { state: { message: res.message } });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message); // Set error message
        setTimeout(() => {
          setError(""); // Clear error message after 3 seconds
        }, 3000);
      }
    }
  };

  useEffect(() => {
    document.body.classList.add("auth-background");

    return () => {
      document.body.classList.remove("auth-background");
    };
  }, []);

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="sign_up_left">
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="sign_in_btn">
              Sign in
            </button>
          </Link>
        </div>
        <div className="sign_up_right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="input"
            />
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
            <button type="submit" className="sign_up_btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
