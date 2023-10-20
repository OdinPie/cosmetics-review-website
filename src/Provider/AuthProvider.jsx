import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(result=>{console.log(result);})
        .catch(error=>{console.log(error.message);})
    }
   
    const createUser = (email,password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }
    const updateUser = (displayName, photoURL) =>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName : displayName,
            photoURL : photoURL
        })
    } 
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUser
        
    }
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            console.log("user state changed");
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;