import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faUserPlus,
  faUserCircle,
  faSignInAlt,
  faSeedling,
  faAddressCard,
  faUtensils,
  faBookOpen,
  faBoxes,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutError, setLogoutError] = useState("");
  const [logoutSuccess, setLogoutSuccess] = useState("");
  const [flashMessage, setFlashMessage] = useState("");
  const location = useLocation();
  const dropdownRef = useRef(null);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = async () => {
    try {
      const url = "http://localhost:5000/api/auth/logout";
      await axios.post(url);
      // Remove the token from local storage
      localStorage.removeItem('token');
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };


  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Recipes", path: "/recipes", icon: faSeedling },
    { name: "Sign Up", path: "/register", icon: faUserPlus },
    { name: "Recommender", path: "/recommender", icon: faUtensils },
  ];

  const profilelinks = [
    { name: "My Profile", path: "/myprofile", icon: faUserCircle },
    { name: "My Recipe Diary", path: "/myrd", icon: faBookOpen },
    { name: "My Inventory", path: "/inventory", icon: faBoxes },
    { name: "Settings", path: "/settings", icon: faCog },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <>
      <div className="navbar container">
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              <FontAwesomeIcon icon={link.icon} /> {link.name}
            </Link>
          ))}
          <div className="dropdown" ref={dropdownRef}>
            <a href="#!" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon> Profile
            </a>
            {dropdownOpen && (
              <div className="dropdown-content">
                {profilelinks.map((link) => (
                  <Link
                    className={location.pathname === link.path ? "active" : ""}
                    to={link.path}
                    key={link.name}
                  >
                    <FontAwesomeIcon icon={link.icon} /> {link.name}
                  </Link>
                ))}
                {/* <button className="nav-button" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    LOGOUT
                </button> */}

              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
      {logoutError && <div className="errorMessage">{logoutError}</div>}
      {logoutSuccess && <div className="successMessage">{logoutSuccess}</div>}
    </>
  );
};

export default Navbar;
