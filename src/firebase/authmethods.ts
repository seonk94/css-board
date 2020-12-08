import { auth } from '.';

export const authMethods = {
  signIn : (email : string, password : string) => {
    return auth.signInWithEmailAndPassword(email, password);
  },
  signUp : (email : string, password : string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }
};