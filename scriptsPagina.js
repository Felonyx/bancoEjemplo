let opcion = document.getElementById("opcion");
let cuerpo = document.getElementsByClassName("cuerpo");

opcion.addEventListener("click", function() {
    if (cuerpo.style.display === "block") {
        cuerpo.style.display = "none";
    } else {
        cuerpo.style.display = "block";
    }
});
    
function usuarioRegistrado(){
    //localiza el archivo JSON
    fetch("resumen.json")
    //la respuesta adapta la respuesta en un objeto JSON
    .then(respuesta => respuesta.json())
    //la funcion muestra el texto de salida de cada dato en la pagina
    .then(function(salida){
        document.getElementById("banco").textContent = salida.banco;
        document.getElementById("sucursal").textContent = salida.sucursal;
        document.getElementById("titular").textContent = salida.titular;
        document.getElementById("nroCuenta").textContent = salida.nro_cuenta;
        document.getElementById("dolar").textContent = salida.saldo[0].moneda;
        document.getElementById("euro").textContent = salida.saldo[1].moneda;
        document.getElementById("monto1").textContent = salida.saldo[0].monto;
        document.getElementById("monto2").textContent = salida.saldo[1].monto;
        document.getElementById("cbu").textContent = salida.cbu;
        document.getElementById("abierto").textContent = salida.abierto;
    })
}