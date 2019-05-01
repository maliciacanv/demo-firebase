//import { } from '../auth/ui-auth.js';
import { signUpForm } from '../data/ui-data.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signin');
  } else if (hash === '#/signup' || hash === '#/home' || hash === '#/privatePost' || hash === '#/publicPost') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signin');
  }
};


const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);

  const main = document.getElementById('container-demo');
  main.innerHTML = '';
 
  switch (router) {
  case 'home':
   
    
    main.appendChild(signUpForm());
    
    break;
  }
};

export const initRouterDemo = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};