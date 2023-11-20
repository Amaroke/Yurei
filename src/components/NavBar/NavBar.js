import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/img/logo_navbar.png";
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
        <div>
            <div className="hidden md:relative items-center justify-center h-0 ml-[48%] -top-1">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-14" />
                </Link>
            </div>
            <nav className="bg-black h-[6svh] flex justify-between items-center px-4 border-b-2 border-purple-700 font-Morganite">
                <ul className="flex items-center list-none text-4xl">
                    <div className="flex items-center">
                        <li className={`relative group ${isDropdownHovered ? 'open' : ''} mx-2`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <span className="cursor-pointer text-white group-hover:text-purple-700">
                                Teams
                            </span>
                            <div className="hidden group-hover:block absolute bg-black border-2 border-purple-700 text-white  text-4xl">
                                <div className="flex flex-col"
                                    onMouseEnter={handleChildMouseEnter}
                                    onMouseLeave={handleChildMouseLeave}>
                                    <Link className="py-2 px-4 block hover:bg-purple-700"
                                        to="/teams/main">
                                        Main
                                    </Link>
                                    <Link className="py-2 px-4 block hover:bg-purple-700"
                                        to="/teams/academy">
                                        Academy
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link className="text-white hover:text-purple-700 mx-2" to="/streams">Streams</Link>
                        </li>
                        <li>
                            <Link className="text-white hover:text-purple-700 mx-2" to="/partners">Partners</Link>
                        </li>
                        <li>
                            <Link className="text-white hover:text-purple-700 mx-2" to="/aboutus">About Us</Link>
                        </li>
                    </div>
                </ul>

                <div className="items-center list-none hidden md:flex">
                    <li className="mx-2 h-4 w-4">
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/Yurei_Esports">
                            <img src={twitter_logo} alt="Twitter" />
                        </a>
                    </li>
                    <li className="mx-2 h-4 w-4">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/yurei_esports/">
                            <img src={instagram_logo} alt="Instagram" />
                        </a>
                    </li>
                    <li className="mx-2 h-4 w-4">
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDqgQjj8y5EKo7AcXtbuSPg">
                            <img src={youtube_logo} alt="Youtube" />
                        </a>
                    </li>
                    <li className="mx-2 h-4 w-4">
                        <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/YureiEsports">
                            <img src={twitch_logo} alt="Twitch" />
                        </a>
                    </li>
                    <li className="mx-2 h-4 w-4">
                        <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@yurei.esports">
                            <img src={tiktok_logo} alt="TikTok" />
                        </a>
                    </li>
                    <li className="mx-2 h-4 w-4">
                        <a target="_blank" rel="noreferrer" href="https://www.xoose.de/yurei-esports/">
                            <img src={shop_logo} alt="Shop" />
                        </a>
                    </li>
                </div>
            </nav >
        </div>
    );
};

export default NavBar;
