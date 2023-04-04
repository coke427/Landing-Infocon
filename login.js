function validateLogin() {
  // Obtener los valores de los campos de entrada
  var empresa = document.getElementById("empresa").value;
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;

  // Verificar que los campos no estén vacíos
  if (empresa == "" || usuario == "" || password == "") {
    alert("Por favor, complete todos los campos");
    return false;
  }

  // Verificar los datos de inicio de sesión
  if (empresa == "123" && usuario == "admin" && password == "123456") {
    alert("Inicio de sesión exitoso");
    // redireccionar a la página de inicio de sesión exitoso
  } else {
    alert("Datos de inicio de sesión incorrectos");
  }
}
