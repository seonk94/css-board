import { auth } from '.';

export const authMethods = {
  signIn : (email : string, password : string) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  signUp : (email : string, password : string) => {
    auth.createUserWithEmailAndPassword(email, password)  
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};