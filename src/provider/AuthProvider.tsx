import React, { ReactChild, useContext, useState } from 'react';
import { auth } from 'src/firebase';
import { authMethods } from 'src/firebase/authmethods';

interface ContextType {
  signUp : (email: string, password: string) => Promise<firebase.default.auth.UserCredential>;
  signIn : (email: string, password: string) => void;
  signOut : () => void;
  user : any;
}

export const firebaseAuth = React.createContext<ContextType>({
  signUp : (email: string, password: string) => { return; },
  signIn : (email: string, password: string) => { return; },
  signOut : () => { return; },
  user : null
} as ContextType);

interface Props {
  children : ReactChild
}
function AuthProvider({ children } : Props) {
  const [user, setUser] = useState<any>(null);

  const handleSignUp = (email : string, password : string) => {
    return authMethods.signUp(email, password);
  };
  const handleSignIn = async (email : string, password : string) => {
    try {
      const res = await authMethods.signIn(email, password);
      setUser(res.user);
      return res;
    } catch(e) {
      console.error(e);
    }
  };
  const handleSignOut = () => {
    setUser(null);
  };
  return (
    <firebaseAuth.Provider value={{
      signUp : handleSignUp,
      signIn : handleSignIn,
      signOut : handleSignOut,
      user : user
    }}>
      {children}
    </firebaseAuth.Provider>
  );
}
export default AuthProvider;