import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState();

    const authenticate = (user) => {
        setUser(user);
    };

    return (
        <UserContext.Provider
            value={{
                authenticate,
                user
            }}
        >
            { children }
        </UserContext.Provider>
    );
};