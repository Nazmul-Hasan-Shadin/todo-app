import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebas.config';

export const AuthContext= createContext()
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user,setUser]= useState(null)
console.log(user);


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
 const handleUpdateNamePhoto=(name,photo)=>{
   return  updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo
    })
 }
 
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{

        setUser(currentUser)
    })

    return ()=> unsubscribe()
  },[])


 const authInfo= {
    handleCreateUser,
    signedInUser,
    handleGoogleSignIn,
    user,
    handleLogOut,
    handleUpdateNamePhoto

 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;