import React from 'react';
import profileImage from '../../assets/img/profil_background.png';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PlayerProfiles = () => {
    const playerData = [
        {
            id: 1,
            nickname: 'KingHades1',
            role: 'Jungler',
            profileImage: profileImage,
        },
        {
            id: 2,
            nickname: 'Buda',
            role: 'Midlaner',
            profileImage: profileImage,
        },
        {
            id: 3,
            nickname: 'Xethnxn',
            role: 'Toplaner',
            profileImage: profileImage,
        },
        {
            id: 4,
            nickname: 'Mentalill',
            role: 'Botlaner',
            profileImage: profileImage,
        },
        {
            id: 5,
            nickname: 'DerCakeman',
            role: 'Support',
            profileImage: profileImage,
        },
    ];

    const playerDataAcademy = [
        {
            id: 1,
            nickname: 'Zwickl',
            role: 'Jungler',
            profileImage: profileImage,
        },
        {
            id: 2,
            nickname: 'Fireshock',
            role: 'Midlaner',
            profileImage: profileImage,
        },
        {
            id: 3,
            nickname: 'RNXX',
            role: 'Toplaner',
            profileImage: profileImage,
        },
        {
            id: 4,
            nickname: 'Noname',
            role: 'Botlaner',
            profileImage: profileImage,
        },
        {
            id: 5,
            nickname: 'Miliektor',
            role: 'Support',
            profileImage: profileImage,
        },
    ];

    const [data, setData] = useState(playerData);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/teams/academy') {
            setData(playerDataAcademy);
        } else {
            setData(playerData);
        }
    }, [location.pathname]);

    return (
        <div className="flex teams pt-10 px-10 h-[88svh]">
            <div className="flex flex-wrap">
                {data.slice(0, 2).map((player) => (
                    <div key={player.id} className="w-1/3 md:w-1/2 p-4">
                        <div className="bg-purple-600 rounded-lg p-3 text-center mb-4 h-42">
                            <img
                                src={player.profileImage}
                                alt={player.name}
                                className="w-full h-30 object-cover mb-2 rounded-lg"
                            />
                            <h2 className="text-white text-lg">{player.nickname}</h2>
                            <p className="text-white">{player.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap">
                {data.slice(2).map((player) => (
                    <div key={player.id} className="w-1/3 md:w-1/3 p-4">
                        <div className="bg-purple-600 rounded-lg p-3 text-center mb-4 h-42">
                            <img
                                src={player.profileImage}
                                alt={player.name}
                                className="w-full h-30 object-cover mb-2"
                            />
                            <h2 className="text-white text-lg">{player.nickname}</h2>
                            <p className="text-white">{player.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerProfiles;
