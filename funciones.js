function asa() {
  class persona {
  constructor(nombre, apellido, gmail, contraseña){
    this.nombre = document.getElementById('nombre').value
    this.apellido = document.getElementById('apellido').value
    this.gmail = document.getElementById('gmail').value
    this.contraseña = document.getElementById('contraseña').value
    this.genero = document.getElementById('genero').value
  };
  };
  var personauno = new persona(nombre, apellido, gmail, contraseña, genero)
  console.log(personauno)
  localStorage.setItem("usuario1", JSON.stringify(personauno));
  location.href ='login.html';
}

function apoyo(){
  alert('la pagina no existente')
}

function login(){
  let usuario = JSON.parse(localStorage.getItem("usuario1"));
   let gmaillog = document.getElementById("gmail-log").value;
   let contraseñalog = document.getElementById("contraseña-log").value;
   console.log(usuario.gmail)
   if(gmaillog && contraseñalog){
    if(gmaillog == usuario.gmail){
      if(contraseñalog == usuario.contraseña){
      usuariologeado(true);
      modificacion()
      }
    }
   }
}

function usuariologeado(boolean){
  localStorage.setItem("usuariologeado", boolean)
}

function modificacion(){

}