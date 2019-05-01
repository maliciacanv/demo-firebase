import { initRouterDemo } from './root/router.js'

const init = () => {
    const config = {
        apiKey: "AIzaSyCXp9b4bxUDX6ulbYYSitQ8MyhoKXvtSVw",
        authDomain: "fir-presentacion-gym.firebaseapp.com",
        databaseURL: "https://fir-presentacion-gym.firebaseio.com",
        projectId: "fir-presentacion-gym",
        storageBucket: "fir-presentacion-gym.appspot.com",
        messagingSenderId: "4848208798"
      };
firebase.initializeApp(config);
initRouterDemo();
}
window.onload = init;