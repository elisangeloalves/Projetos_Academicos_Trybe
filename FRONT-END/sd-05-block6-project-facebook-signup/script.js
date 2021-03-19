const button = document.getElementById('button-login');
button.addEventListener('click', function () {
  alert(document.querySelector('.user-email-phone').value);
});
/* const buttonSubmit = document.getElementById('facebook-register');
new JustValidate('.js-form',{
  rules:{
    name: {
      required: true
    }
  },
  messages: {
    name: {
      required: "Campo obrigatório"
    }
  }
});
buttonSubmit.addEventListener('click', validaFormulario);
function validaFormulario(){

} */
