import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import logo from "../../assets/img/logo_navbar.jpg";
import twitter_logo from '../../assets/img/twitter.svg';
import instagram_logo from '../../assets/img/instagram.svg';


const NavBar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link to="/teams">Teams</Link>
                </li>
                <li>
                    <Link to="/streams">Streams</Link>
                </li>
                <li>
                    <Link to="/partners">Partners</Link>
                </li>
                <li className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <div className="social-icon">
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/Yurei_Esports">
                            <img src={twitter_logo} alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/yurei_esports/">
                            <img src={instagram_logo} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://">
                            <img src={""} alt="X" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://">
                            <img src={""} alt="X" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https:/">
                            <img src={""} alt="X" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://">
                            <img src={""} alt="X" />
                        </a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;
