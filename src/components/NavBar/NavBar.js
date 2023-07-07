import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import logo from "../../assets/img/logo_navbar.jpg";
import twitter_logo from '../../assets/img/twitter.svg';
import instagram_logo from '../../assets/img/instagram.svg';
import youtube_logo from '../../assets/img/youtube.svg';
import twitch_logo from '../../assets/img/twitch.svg';
import tiktok_logo from '../../assets/img/tiktok.svg';
import shop_logo from '../../assets/img/shop.svg';


const NavBar = () => {

    const [isDropdownHovered, setIsDropdownHovered] = useState(false);
    const [isChildHovered, setIsChildHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownHovered(true);
    };

    const handleMouseLeave = () => {
        if (!isChildHovered) {
            setIsDropdownHovered(false);
        }
    };

    const handleChildMouseEnter = () => {
        setIsChildHovered(true);
    };

    const handleChildMouseLeave = () => {
        setIsChildHovered(false);
        setIsDropdownHovered(false);
    };

    return (
        <nav>
            <ul className="navbar navbar-container">
                <div className="navbar-firstelem">
                    <li className={`dropdown ${isDropdownHovered ? 'open' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} >
                        <span className="nav-link dropdown-toggle"
                            data-toggle="dropdown" >
                            Teams
                        </span>
                        <div className="dropdown-menu">
                            <div className="dropdown-item-group" onMouseEnter={handleChildMouseEnter}
                                onMouseLeave={handleChildMouseLeave} >
                                <Link className="dropdown-item"
                                    to="/teams/main" >
                                    Main
                                </Link>
                                <Link className="dropdown-item whitebar"
                                    to="/teams/academy" >
                                    Academy
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link id="streams" className="nav-link" to="/streams">Streams</Link>
                    </li>
                    <li>
                        <Link id="partners" className="nav-link" to="/partners">Partners</Link>
                    </li>
                </div>
                <li className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </li>
                <li>
                    <Link id="about" className="navbar-about nav-link" to="/aboutus">About Us</Link>
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
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDqgQjj8y5EKo7AcXtbuSPg">
                            <img src={youtube_logo} alt="Youtube" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/YureiEsports">
                            <img src={twitch_logo} alt="Twitch" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@yurei.esports">
                            <img src={tiktok_logo} alt="TikTok" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.xoose.de/yurei-esports/">
                            <img src={shop_logo} alt="Shop" />
                        </a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;
