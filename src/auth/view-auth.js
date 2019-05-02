export const userState = () => firebase.auth().currentUser;

export const authStateObserver = (user) => {
  if (user) { 
    // changeHash('/inicio');
  } else {
    // logOut();
    // changeHash('/home');
  }
};

export const initFirebaseAuth = () => firebase.auth().onAuthStateChanged(authStateObserver);

