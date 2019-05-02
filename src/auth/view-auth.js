import {logOut} from './auth.js';
const changeHash = (hash) => {
  location.hash = hash;
};

export const userState = () => firebase.auth().currentUser;

export const authStateObserver = (user) => {
  if (user) { 
     changeHash('/home');
    
  } else {
     changeHash('/signin');
  }
};

export const initFirebaseAuth = () => firebase.auth().onAuthStateChanged(authStateObserver);

