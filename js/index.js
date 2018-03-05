var cuerpo;
var Salon = {
  init: function(){
    cuerpo = document.getElementById('cuerpo');
    cuerpo.innerHTML = "";
    document.getElementById('btnListar').addEventListener('click',this.listarEstudiantes);
    document.getElementById('btnPromedio').addEventListener('click',this.calcularPromedio);
    document.getElementById('btnMejor').addEventListener('click',this.obtenerMejorEst);
    document.getElementById('btnPeor').addEventListener('click',this.obtenerPeorEst);
  },
  listarEstudiantes: function(){
    var Estudiantes = DatosSalon.estudiantes;
    cuerpo.innerHTML = "";
    for (var i = 0; i < Estudiantes.length; i++) {
      var codigo = Estudiantes[i].codigo;
      var nombre = Estudiantes[i].nombre;
      var nota = Estudiantes[i].nota;
      cuerpo.innerHTML += "<tr><td>"+codigo+"</td><td>"+nombre+"</td><td>"+nota+"</td></tr>";
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
  },
  obtenerMejorEst: function(){
    var notaAlta,oEstudiante = null;
    var Estudiantes = DatosSalon.estudiantes;
    for (var i = 0; i < Estudiantes.length; i++) {
        var tmpNota = Estudiantes[i].nota;
        if(notaAlta == null || tmpNota > notaAlta){
          notaAlta = tmpNota;
          var tmpCodigo = Estudiantes[i].nota;
          var tmpNombre = Estudiantes[i].nombre;
          oEstudiante = {codigo:tmpCodigo,nombre:tmpNombre,nota:tmpNota};
        }
    }
    if(oEstudiante){
      cuerpo.innerHTML = "<tr><td>"+oEstudiante.codigo+"</td><td>"+oEstudiante.nombre+"</td><td>"+oEstudiante.nota+"</td></tr>";
    }else{
      alert("No se encontró un estudiante");
    }
  },
  obtenerPeorEst: function(){
    var notaBaja,oEstudiante = null;
    var Estudiantes = DatosSalon.estudiantes;
    for (var i = 0; i < Estudiantes.length; i++) {
      var tmpNota = Estudiantes[i].nota;
      if(notaBaja == null || tmpNota < notaBaja){
        notaBaja = tmpNota;
        var tmpCodigo = Estudiantes[i].nota;
        var tmpNombre = Estudiantes[i].nombre;
        oEstudiante = {codigo:tmpCodigo,nombre:tmpNombre,nota:tmpNota};
      }
    }
    if(oEstudiante){
      cuerpo.innerHTML = "<tr><td>"+oEstudiante.codigo+"</td><td>"+oEstudiante.nombre+"</td><td>"+oEstudiante.nota+"</td></tr>";
    }else{
      alert("No se encontró un estudiante");
    }
  }
};

Salon.init();
