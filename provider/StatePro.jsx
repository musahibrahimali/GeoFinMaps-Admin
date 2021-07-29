import { useState, useEffect, createContext, useContext } from 'react';
import nookies from 'nookies';
import firebase from 'firebase';
import firebaseClient from '../config/firebaseClient';

const StateContext = createContext({});

export const StateProvider = ({ children }) => {
    firebaseClient();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (authUser) => {
            if (!authUser) {
                setCurrentUser(null);
                nookies.set(undefined, "token", "", {});
                return;
            }
            const token = await authUser.getIdToken();
            setCurrentUser(authUser);
            nookies.set(undefined, "token", token, {});
        });
    }, []);

    return (
        <StateContext.Provider value={currentUser}>
            {children}
        </StateContext.Provider>
    );
};

export const useAuth = () => useContext(StateContext);

