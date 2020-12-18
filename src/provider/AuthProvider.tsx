import React, { createContext, ReactChild, useContext, useEffect, useState } from 'react';
import { auth } from 'src/firebase';
import { authMethods } from 'src/firebase/auth/authmethods';

interface ContextType {
  signUp : (email: string, password: string) => Promise<boolean>;
  signIn : (email: string, password: string) => Promise<boolean>;
  signOut : () => void;
  user : null | firebase.default.User;
  error : null | string;
}

export const firebaseAuth = React.createContext<ContextType>({} as ContextType);

interface Props {
  children : ReactChild
}

function AuthProvider({ children } : Props) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) setUser(user);
    });
  }, []);

  const handleSignUp = async (email : string, password : string) => {
    try {
      await authMethods.signUp(email, password);
      return true;
    } catch(e) {
      setError(e.message);
      return false;
    }
  };
  const handleSignIn = async (email : string, password : string) => {
    try {
      const res = await authMethods.signIn(email, password);
      setUser(res.user);
      return true;
    } catch(e) {
      setError(e.message);
      return false;
    }
  };
  const handleSignOut = () => {
    try {
      auth.signOut();
      setUser(null);
    } catch(e) {
      console.error(e.message);
    }
  };
  return (
    <firebaseAuth.Provider value={{
      signUp : handleSignUp,
      signIn : handleSignIn,
      signOut : handleSignOut,
      user : user,
      error : error
    }}>
      {children}
    </firebaseAuth.Provider>
  );
}
export default AuthProvider;