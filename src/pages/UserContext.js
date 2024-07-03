import React, { createContext, useState, useContext } from 'react';

// Create context
const UserContext = createContext();

// Hook to use context
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Mock function to toggle login/logout
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <UserContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
