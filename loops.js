var estudiantes = ["Maria", "Pedro", "Sergio", "Rosa", "Dani"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

// Hola, Maria
//Hola, Sergio
//Hola, Rosa
//Hola, Daniel

//Otra opción.
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
//Con esta opción tambien sale en la consola todos los saludos.