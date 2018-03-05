var tabla,cuerpo;
var Salon = {
  init: function(){
    tabla = document.getElementById('tabla');
    cuerpo = document.getElementById('cuerpo');
    //tabla.style.display = "none";
    cuerpo.innerHTML = "";
    document.getElementById('btnListar').addEventListener('click',this.listarEstudiantes);
    document.getElementById('btnPromedio').addEventListener('click',this.calcularPromedio);
  },
  listarEstudiantes: function(){
    var Estudiantes = DatosSalon.estudiantes;
    for (var i = 0; i < Estudiantes.length; i++) {
      var codigo = Estudiantes[i].codigo;
      var nombre = Estudiantes[i].nombre;
      var nota = Estudiantes[i].nota;

      cuerpo.innerHTML += "<tr><td>"+codigo+"</td><td>"+nombre+"</td><td>"+nota+"</td></tr>";
      tabla.style.display = "block";
    }
  },
  calcularPromedio: function(){
    var total=0;
    var Estudiantes = DatosSalon.estudiantes;
    for (var i = 0; i < Estudiantes.length; i++) {
      var codigo = Estudiantes[i].codigo;
      var nombre = Estudiantes[i].nombre;
      var nota = Estudiantes[i].nota;

      total += nota;
    }
    total = parseFloat(total) / Estudiantes.length;
    document.getElementById('contenido').innerHTML = "Promedio: "+total;
  }
};

Salon.init();
