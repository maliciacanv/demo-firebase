import { subirImagenStorage, subirImageUrlFirestore } from './data.js';


export const mostrarData = (cards) => {
    const formElem = document.createElement('div');
    const tempFormSignUp = `
    <header class="header">
    <div class="text-user"><h2>nombre de usuario</h2></div></header>
    <div class = "margin-top d-flex justify-content-center">
        <div>
        <form id="form-images" >
          <label class="btn btn-file">
          <input type="file" name="fichero" value="" id="archivo-imagen" class="d-none d-lg-block"/>
          <img src="/src/img/icon-upload.png"  alt="descargar">
          </label>
        </form>
      </div>
    </div>
<div class="container margin-top">
    <div id= "container-cards-image" class="row"></div>
</div>
    `;
    
    formElem.innerHTML = tempFormSignUp;
   
    const archivoImagen = formElem.querySelector('#archivo-imagen');
    const containerCardsImage = formElem.querySelector('#container-cards-image');

    archivoImagen.addEventListener('change', () => {
      const cargarImagenFirestore = archivoImagen.files[0];
// console.log(cargarImagenFirestore)
      
      
const uploadTask = subirImagenStorage().child('imagenes-memes/' + cargarImagenFirestore.name ).put(cargarImagenFirestore);

      uploadTask.on('state_changed', 
        function(snapshot){
// se va mostrando el progreso de la imagen
        }, function(error) {
        alert('Hubo un error')
      }, function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          

            const objCollection = {
              nombre: cargarImagenFirestore.name ,
              url:downloadURL
            };
      
            subirImageUrlFirestore(objCollection);
            alert('Se subio la imagen con ' +  downloadURL);
        });
      });
    });
    cards.forEach( ele => {
      containerCardsImage.appendChild(cardsImage(ele))
    })
    return formElem;
  };
  
  
  
const cardsImage = (data) => {
  const formE = document.createElement('div');
  formE.setAttribute('class','col-lg-3 col-md-4 col-6');
  const tempForm = `
  
     <a href="#/home" class="d-block mb-4 h-100">
     <h3 class="text-cards">Nombre del usuario</h3>
            <img class="img-fluid img-thumbnail" src="${data.url}" alt="">
      
      <h3 class="text-cards">Nombre de la imagen</h3>
            </a>
  
   

  `;
  formE.innerHTML = tempForm;
  return formE;
};

// para que el storage funcione con auth
// write: if request.auth != null;