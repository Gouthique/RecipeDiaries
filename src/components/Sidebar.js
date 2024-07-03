import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sidebar({links, close, profilelinks}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleDropdown = (e) => {
        e.stopPropagation();  // Prevents the sidebar close event
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="sidebar" onClick={close}>
            {links.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
            <div>
                <a href="#!" className="sidebar-link" onClick={toggleDropdown}>Profile</a>
                {dropdownOpen && (
                    <div className="dropdown-content">
                        {profilelinks.map(link => (
                            <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                                <FontAwesomeIcon icon={link.icon} />
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
