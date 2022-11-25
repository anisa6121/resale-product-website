
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
const signIn = (email, password) => {
	// setLoading(true);
	return signInWithEmailAndPassword(auth, email, password);
};

const user = 'anisa'
const authInfo = {
	
    signIn,
   
	
};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;