

export const gmailLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log('logueado con google');
    })
    .catch(err => console.log(err.code));
};

export const facebookLogin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log('logueado con fb');
    })
    .catch(err => console.log(err.code));
};

export const logOut = () => {
  firebase.auth().signOut()
    .then(() => {
    //   changeHash('/home'); 
      console.log('cerraste sesión')
    }).catch(error => console.log(error.code));
};