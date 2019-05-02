 import { gmailLogin,facebookLogin } from './auth.js';
 import { userState } from './view-auth.js';

const changeHash = (hash) => {
  location.hash = hash;
};

export const signIn = () => {
  const signInTemplate = `
    <div>
        <form>
        <h2>Iniciar Sesión</h2>
        <input type="email" placeholder="Correo" id="email-si">
        <input type="password" placeholder="Contraseña" id="password-si">
        <button type="button" id="signin-btn">INICIAR SESIÓN</button>
        </form>
        <button id="facebook-login" class="fa fa-facebook"></button>
        <button id="gmail-login" class="fa fa-google"></button>
        <h3 id="signup-question">¿No tienes una cuenta?</h3>
    </div>`;
  const sectionElement = document.createElement('section');
  sectionElement.innerHTML = signInTemplate;

  const btnSignIn = sectionElement.querySelector('#signin-btn');
  btnSignIn.addEventListener('click', () => {
    // LLamar a la función para iniciar sesión
  });

  const btnFacebook = sectionElement.querySelector('#facebook-login');
  btnFacebook.addEventListener('click', () => {
    // Llamar a la funcion para inciar sesion con facebook
    facebookLogin();
    changeHash('/signin');
  });

  const btnGoogle = sectionElement.querySelector('#gmail-login');
  btnGoogle.addEventListener('click', () => {
    // LLamar a la funcion para iniciar sesion con google
    gmailLogin();


  });

  const btnRegister = sectionElement.querySelector('#signup-question');
  btnRegister.addEventListener('click', () => {
    changeHash('/register');
  });
  return sectionElement;
};

export const register = () => {
  const registerTemplate = `
    <div id="signup-container">
        <form>
        <h2>Regístrate</h2>
        <input type="text" placeholder="Nombre" id="user-name">
        <input type="email" placeholder="E-mail" id="email">
        <input type="password" placeholder="Contraseña" id="password">
        <button type="button" id="signup-btn">Crear Cuenta</button>
        </form>
    </div>`;
  const secElement = document.createElement('section');
  secElement.innerHTML = registerTemplate;

  const registerBtn = secElement.querySelector('#signup-btn');
  registerBtn.addEventListener('click', () => {
    // Llamar a la funcion para registrar una cuenta
  });
  return secElement;
};

