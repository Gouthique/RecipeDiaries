import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profilePicture: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

   
    // Fetch user data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch profile');
                setLoading(false);
                console.error('Failed to fetch profile:', err);
            }
        };

        fetchProfile();
    }, []);

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
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Randomly select an avatar URL from the array
    //const randomAvatarUrl = preExistingAvatars[Math.floor(Math.random() * preExistingAvatars.length)];

    return (
        <div className="profile">
            <div className="avatar">
                {/* Use email to generate avatar or you could use the username or any unique value */}
                <Avatar name={`${userData.firstName} ${userData.lastName}`} email={userData.email} size="150" round={true}/>
            </div>
            <div className="profile-details">
                <div>First Name: {userData.firstName}</div>
                <div>Last Name: {userData.lastName}</div>
                <div>Email: {userData.email}</div>
            </div>
            <button className="logout-button" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
        </div>
    );
};

export default ProfilePage;
