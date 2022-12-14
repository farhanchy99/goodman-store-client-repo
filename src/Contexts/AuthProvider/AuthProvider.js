import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext= createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin =(provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn =(email, password, photoURL) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password, photoURL)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
       }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        });

        return() =>{
            return unsubscribe();
        }
    }, [])

    const authInfo={
        user,
        providerLogin,
        loading,
        createUser,
        logIn,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;