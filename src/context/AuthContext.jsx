import { children, createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase_config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';





const AuthContext = createContext();


//Google Login
const googleProvider = new GoogleAuthProvider();

export const UseAuth = () => {
    return useContext(AuthContext)
}

//authProvider
export const AuthProvider = ({ children }) => {
    const [currentUser, setUser] = useState(null);




    //register by the user
    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    }


    //login by the user
    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    //signin with google
    const googleSigning = async () => {
        return await signInWithPopup(auth, googleProvider)
    }

    //logout
    const logOut = () => {
        return signOut(auth)
    }
    //managge state
    useEffect(() => {
        const unScribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
        return () => unScribe();
    }, [])


    const value = {
        currentUser,
        registerUser,
        loginUser,
        googleSigning,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}