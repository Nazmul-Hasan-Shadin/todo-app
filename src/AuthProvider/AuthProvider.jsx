import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebas.config';

export const AuthContext= createContext()
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user,setUser]= useState(null)
const [loading,setLoading]= useState(true)
console.log(user);


const handleCreateUser= (email,password)=>{
   setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

 const signedInUser=(email,password)=>{
  setLoading(true)
   return  signInWithEmailAndPassword(auth,email,password)
 } 

 const handleGoogleSignIn=()=>{
  setLoading(true)
    return signInWithPopup(auth,provider)
 }

 const handleLogOut=()=>{
  setLoading(true)
    signOut(auth)
 }
 const handleUpdateNamePhoto=(name,photo)=>{
  setLoading(true)
   return  updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo
    })
 }
 
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{

        setUser(currentUser)
        setLoading(false)
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