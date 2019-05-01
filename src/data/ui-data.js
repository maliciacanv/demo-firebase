
export const signUpForm = () => {
    const formElem = document.createElement('form');
    formElem.setAttribute('id', 'signup');
    const tempFormSignUp = `
      <div class="form-sign-up" id="signup">
        <div class="col-form-create-account">
          <p class="text-login text-first">
            <a href="#/" class="back fa fa-chevron-circle-left "></a> Crea una cuenta ¡Es gratis!
          </p>
          <a href="#/facebook-create" class="fb btn-social-media" id="facebook-create-btn">
            <i class="fa fa-facebook fa-fw space-media"></i> Facebook
          </a>   
          <a href="#/google-create" class="google btn-social-media" id="google-create-btn">
            <i class="fa fa-google fa-fw space-media"></i> Google+
          </a>
        </div>
        <div class="space-form"><span class="text-login-or">o</span></div>
        <div class="register-inputs-field col-form-create-account">
          <input type="text" class="login-social-media" id="name-social-media" placeholder="Nombre">
          <input type="text" class="login-social-media" id="lastname-social-media" placeholder="Apellido">
          <input type="email" class="login-social-media" id="create-email" placeholder="Correo electronico">
          <input type="password" class="login-social-media" id="create-password" placeholder="Contraseña">
        </div>
        <p id="error-message-signup"></p>
        <button class="login-social-media btn-login" id="btn-register">Registrate</button> 
      </div>`;
    
    formElem.innerHTML = tempFormSignUp;
    const SignUpBtn = formElem.querySelector('#btn-register');
    return formElem;
  };
  
  