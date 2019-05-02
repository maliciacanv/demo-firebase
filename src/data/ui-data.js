import { subirImagenStorage, subirImageUrlFirestore } from './data.js';
import { logOut } from '../auth/auth.js';
import { userState } from '../auth/view-auth.js';

export const mostrarData = (cards) => {
  const formElem = document.createElement('div');
  const tempFormSignUp = `
    <header class="header">
    <div>
      <div>
        <button type="button" id="btn-logout" class="btn-logout"><i class="fa fa-close"></i></button>
      </div>
      <div class="d-flex justify-content-end">
        <img src=${userState().photoURL} class="img-size mr-3 mt-3 " alt="foto-usuario">
        <h2 class="mt-4 mr-4" >${userState().displayName}</h2>
      </div>
   </div>
    </header>
    <div class = "margin-top d-flex justify-content-center">
        <div>
        <form id="form-images" >
          <label class="btn btn-file">
          <input type="file" name="fichero" value="" id="archivo-imagen" class="d-none"/>
          <img src="https://github.com/dayaGuerra/demo-firebase/blob/gh-pages/src/public/icon-upload.png?raw=true"  alt="descargar">
          </label>
        </form>
      </div>
    </div>
  <div class="container margin-top">
      <div id= "container-cards-image" class="row"></div>
  </div>`;

  formElem.innerHTML = tempFormSignUp;

  const archivoImagen = formElem.querySelector('#archivo-imagen');
  const containerCardsImage = formElem.querySelector('#container-cards-image');
  const btnLogOut = formElem.querySelector('#btn-logout');
 
  btnLogOut.addEventListener('click', logOut);
  archivoImagen.addEventListener('change', () => {

    const cargarImagenFirestore = archivoImagen.files[0];
    const uploadTask = subirImagenStorage().child('imagenes-memes/' + cargarImagenFirestore.name).put(cargarImagenFirestore);

    // como se prepara ala data para firestore

    uploadTask.on('state_changed',
      function (snapshot) {
        // se va mostrando el progreso de la imagen
      }, function (error) {
        alert('Hubo un error')
      }, function () {
        // captura la url de la imagen en downloadURL
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
         
          const objCollection = {
            nombre: cargarImagenFirestore.name,
            url: downloadURL
          };

        // Agrega objeto a firestore.
          subirImageUrlFirestore(objCollection);
         
          alert('Se subio la imagen con ' + downloadURL);
        });
      });
  });
  // recorre  las imagenes para mostrarse en el navegador.
  cards.forEach(ele => {
    containerCardsImage.appendChild(cardsImage(ele))
  })
  return formElem;
};


// template de imagenes mostradas

const cardsImage = (data) => {
  const formE = document.createElement('div');
  formE.setAttribute('class', 'col-lg-3 col-md-4 col-6');
  const tempForm = `
  
     <a href="#/home" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="${data.url}" alt="">
      </a>

  `;
  formE.innerHTML = tempForm;
  return formE;
};

// para que el storage funcione con auth
// write: if request.auth != null;