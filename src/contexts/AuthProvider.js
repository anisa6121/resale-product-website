
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
const signIn = (email, password) => {
	// setLoading(true);
	return signInWithEmailAndPassword(auth, email, password);
    };
   const logOut = () => {
		// setLoading(true);
		return signOut(auth);
   };  

const user = 'anisa'
const authInfo = {
	signIn,
	logOut,
};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;