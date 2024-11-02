// src/components/sidebar/sidebar.layout.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaDollarSign, FaCalendarAlt, FaImages, FaInfoCircle, FaCog } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { MdHealthAndSafety } from 'react-icons/md';
import './sidebar.layout.css';

const Sidebar = ({ username, onLogout }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();

    // Toggle and store theme
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Select logo based on theme
    const logoSrc = theme === 'dark' ? '/darkLogo.png' : '/logo192.png';

    return (
        <>
            {/* Sidebar */}
            <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="logo">
                    <Link to="/" onClick={toggleMobileMenu}>
                        <img src={logoSrc} alt="logo" className="logo" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="nav flex-column">
                    <Link to="/bio" onClick={toggleMobileMenu} className="nav-link">
                        <SiAboutdotme className="nav-icon" />
                        <span className="nav-text">About</span>
                    </Link>
                    <Link to="/rates" onClick={toggleMobileMenu} className="nav-link">
                        <FaDollarSign className="nav-icon" />
                        <span className="nav-text">Rates</span>
                    </Link>
                    <Link to="/after-care" onClick={toggleMobileMenu} className="nav-link">
                        <MdHealthAndSafety className="nav-icon" />
                        <span className="nav-text">After Care</span>
                    </Link>
                    <Link to="https://austin-anderson-tattoos.square.site/" onClick={toggleMobileMenu} className="nav-link">
                        <FaCalendarAlt className="nav-icon" />
                        <span className="nav-text">Appointments</span>
                    </Link>
                    <Link to="/past-work" onClick={toggleMobileMenu} className="nav-link">
                        <FaImages className="nav-icon" />
                        <span className="nav-text">Past Work</span>
                    </Link>
                </nav>

                {/* Footer Section with Theme Toggle */}
                <div className="sidebar-footer">
                    <div className="theme-toggle-container mt-3">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={theme === 'dark'}
                                onChange={toggleTheme}
                            />
                            <span className="slider round"></span>
                        </label>
                        <span className="theme-label">Dark Mode</span>
                    </div>
                </div>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="hamburger" onClick={toggleMobileMenu}>
                <img src={logoSrc} alt="logo" className="hamburger-logo" />
            </div>

            {/* Overlay to close the sidebar */}
            {isMobileMenuOpen && <div className="overlay show" onClick={toggleMobileMenu}></div>}
        </>
    );
};

export default Sidebar;
