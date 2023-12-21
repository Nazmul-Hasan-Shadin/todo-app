import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { Children, createContext, useState } from 'react';
import auth from '../firebase/firebas.config';

export const AuthContext= createContext()
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user,setUser]= useState(null)


const handleCreateUser= (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

 const signedInUser=(email,password)=>{
   return  signInWithEmailAndPassword(auth,email,password)
 } 

 const handleGoogleSignIn=()=>{
    return signInWithPopup(auth,provider)
 }

 const handleLogOut=()=>{
    signOut(auth)
 }
 
 const authInfo= {
    handleCreateUser,
    signedInUser,
    handleGoogleSignIn,
    user,
    handleLogOut

 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;