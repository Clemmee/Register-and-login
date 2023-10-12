import React, { useState } from 'react';
import Darius from './img/OIP.jpg'

const UserProfile = ({ user }) => {
    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <img src={Darius} alt="Darius Kincaid aka Samuel L Jackson" />
        </div>
    );
};

const UserButton = () => {
    const [showUserInfo, setShowUserInfo] = useState(false);
    const user = {
        name: 'Darius Kincaid',
        email: 'kincaid@gmail.com',
    };

    const handleClick = () => {
    setShowUserInfo(!showUserInfo);
};

    return (
        <div>
            <button onClick={handleClick}>
            {showUserInfo ? 'Hide User Info' : 'Show User Info'}
            </button>
            {showUserInfo && <UserProfile user={user} />}
        </div>
    );
};

export default UserButton;
