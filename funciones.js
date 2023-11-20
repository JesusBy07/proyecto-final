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
  localStorage.setItem('personauno', 'ssss');
  location.href ='login.html';
  return false;
}


