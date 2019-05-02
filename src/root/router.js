//import { } from '../auth/ui-auth.js';
import { mostrarData } from '../data/ui-data.js';
import { traerDatosDeFirestore } from '../data/data.js'

// cambiar el hash -->
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
  traerDatosDeFirestore(data => {
    console.log(data)
    main.innerHTML = '';
    main.appendChild(mostrarData(data));
  }) 
    break;
  }
};

export const initRouterDemo = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};