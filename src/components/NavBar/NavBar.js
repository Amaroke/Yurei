import React from 'react';
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
    return (
        <nav>
            <ul className="navbar navbar-container">
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
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDqgQjj8y5EKo7AcXtbuSPg">
                            <img src={youtube_logo} alt="Youtube" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.xoose.de/yurei-esports/">
                            <img src={shop_logo} alt="Shop" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://">
                            <img src={twitch_logo} alt="Twitch" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://">
                            <img src={tiktok_logo} alt="TikTok" />
                        </a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;
