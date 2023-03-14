$("#nuevoUsuario").click(function() {
    var nombre = $("#nombre").val(); //capturar el valor del campo con id nombre
    var apellido =$("#apellido").val();
    var identificacion = $("#identificacion").val(); //capturar el valor del campo con id identificacion
    $('#usuarios tr:last').after('<tr><td>' + nombre + '</td><td>'+ apellido + '</td><td>' + identificacion + '</td></tr>'); //agrega un nuevo registro a la tabla, después del último tr
    $('#nuevoUsuarioModal').modal('toggle'); //cierra el modal
});

$("#nuevoVehiculo").click(function() {
    var placa = $("#placa").val(); 
    var marca =$("#marca").val();
    var modelo = $("#modelo").val(); 
    $('#vehiculos tr:last').after('<tr><td>' + placa + '</td><td>'+ marca + '</td><td>' + modelo + '</td></tr>'); 
    $('#nuevoVehiculoModal').modal('toggle'); 
});

