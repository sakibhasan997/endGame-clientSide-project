import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    // Google
    const gProvider = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Register
    const createRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const createLogin = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    

    // LogOut
    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged (auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        gProvider,
        createRegister,
        createLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;