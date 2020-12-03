import React, { ReactChild, useContext } from 'react';
import { authMethods } from 'src/firebase/authmethods';

export const firebaseAuth = React.createContext({} as typeof authMethods);

interface Props {
  children : ReactChild
}
function AuthProvider({ children } : Props) {
  const handleSignUp = (email : string, password : string) => {
    return authMethods.signUp(email, password);
  };
  const handleSignIn = (email : string, password : string) => {
    return authMethods.signIn(email, password);
  };
  return (
    <firebaseAuth.Provider value={{
      signUp : handleSignUp,
      signIn : handleSignIn
    }}>
      {children}
    </firebaseAuth.Provider>
  );
}
export default AuthProvider;