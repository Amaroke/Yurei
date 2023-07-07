import React from 'react';
import './Teams.css';
import profileImage from '../../assets/img/profil_background.png';

const PlayerProfiles = () => {
    const playerData = [
        {
            id: 1,
            nickname: 'Nickname',
            name: 'IRL Name',
            role: 'Jungler',
            profileImage: profileImage
        },
        {
            id: 1,
            nickname: 'Nickname',
            name: 'IRL Name',
            role: 'Midlaner',
            profileImage: profileImage
        },
        {
            id: 1,
            nickname: 'Nickname',
            name: 'IRL Name',
            role: 'Toplaner',
            profileImage: profileImage
        },
        {
            id: 1,
            nickname: 'Nickname',
            name: 'IRL Name',
            role: 'Botlaner',
            profileImage: profileImage
        },
        {
            id: 1,
            nickname: 'Nickname',
            name: 'IRL Name',
            role: 'Support',
            profileImage: profileImage
        }
    ];

    return (
        <div className="teams">
            <div className="row">
                {playerData.slice(0, 2).map(player => (
                    <div key={player.id} className="col-md-6">
                        <div className="profile-card">
                            <img src={player.profileImage} alt={player.name} className="profile-image" />
                            <h2>{player.nickname}</h2>
                            <p>{player.name}</p>
                            <p>{player.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                {playerData.slice(2).map(player => (
                    <div key={player.id} className="col-md-4">
                        <div className="profile-card">
                            <img src={player.profileImage} alt={player.name} className="profile-image" />
                            <h2>{player.nickname}</h2>
                            <p>{player.name}</p>
                            <p>{player.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerProfiles;
