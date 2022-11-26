
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

 const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    


 const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
 };

   
    
    
 const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
 };

    const updateUser = (userInfo) => {
     setLoading(true)
		return updateProfile(auth.currentUser, userInfo);
    };
    
// Social Login
    const googleProvider = new GoogleAuthProvider();
   	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	}; 


useEffect(() => {
	const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
		console.log("user observing");
		setUser(currentUser);
		setLoading(false);
	});

	return () => unsubscribe();
}, []);


    

   const logOut = () => {
		setLoading(true);
		return signOut(auth);
   };  



    

     const authInfo = {
		createUser,
		signIn,
		updateUser,
		logOut,
		user,
		loading,
		googleSignIn,
     };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;