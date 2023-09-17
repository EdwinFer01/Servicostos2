//forma para cambiar de estilos opimiendo un boton
/*
document.addEventListener("DOMContentLoaded", function () {
    const botonCambiarTema = document.getElementById("btnSwitchTheme");
    const enlaceEstilo = document.getElementById("color-fondo-claro");

    botonCambiarTema.addEventListener("click", function () {
        if (enlaceEstilo.href.includes("style.css")) {
            enlaceEstilo.href = "style-dark.css"; // Cambia al estilo oscuro
        } else {
            enlaceEstilo.href = "style.css"; // Cambia al estilo claro
        }
    });
});
*/

// forma para cambiar de un tema a otro dependiendo de su texto
document.addEventListener("DOMContentLoaded", function () {
    const botonCambiarTema = document.getElementById("btnSwitchTheme");
    const enlaceEstilo = document.getElementById("color-fondo-claro");

    // Variable para realizar un seguimiento del tema actual
    let temaActual = "claro"; // Puede ser "claro" o "oscuro" al inicio

    botonCambiarTema.addEventListener("click", function () {
        if (temaActual === "claro") {
            enlaceEstilo.href = "style-dark.css"; // Cambia al estilo oscuro
            botonCambiarTema.textContent = "Claro"; // Cambia el texto del botón
            temaActual = "oscuro"; // Actualiza el tema actual
        } else {
            enlaceEstilo.href = "style.css"; // Cambia al estilo claro
            botonCambiarTema.textContent = "Oscuro"; // Cambia el texto del botón
            temaActual = "claro"; // Actualiza el tema actual
        }
    });
});


//Activa el boton limpiar

document.addEventListener("DOMContentLoaded", function () {
    const botonLimpiar = document.getElementById("btnClean");
    const formulario = document.getElementById("formulario1");

    botonLimpiar.addEventListener("click", function (event) {
        event.preventDefault();
        formulario.reset();
    });
});

// calcular costos


function calcularResultado() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let consumoTotal = parseFloat(document.getElementById("consumoTotal").value);
    
    let costosFijos = parseFloat(document.getElementById("costosFijos").value);
    
    let consumoMesActualContadorParcial = parseFloat(document.getElementById("consumoMesActualContadorParcial").value);
    //let consumoMesAnteriorGlobal = parseFloat(document.getElementById("consumoMesAnteriorGlobal").value);
    let consumoMesAnteriorParcial = parseFloat(document.getElementById("consumoMesAnteriorParcial").value);
  

    //Calculamos los valores a pagar parcialmente
  
    let costoUnidad = subtotal / consumoTotal;
    let nuevosCostoFijo = costosFijos / 2;
    let diferenciaMesActualParcial = consumoMesActualContadorParcial - consumoMesAnteriorParcial;
    let consumoDiferenciaMesActualContadorGlobal = consumoTotal - diferenciaMesActualParcial;
    let valorPagarGlobal = (consumoDiferenciaMesActualContadorGlobal * costoUnidad) + nuevosCostoFijo;
    let valorPagarParcial = (diferenciaMesActualParcial * costoUnidad) + nuevosCostoFijo;
    let costoTotal = valorPagarGlobal + valorPagarParcial;
    let consumoDiferenciaMesActualContadorParcial = consumoMesActualContadorParcial - consumoMesAnteriorParcial;

    // Actualiza el campo resultado
  
    document.getElementById("costoUnidad").value = costoUnidad;
    document.getElementById("consumoDiferenciaMesActualContadorGlobal").value = consumoDiferenciaMesActualContadorGlobal;
    document.getElementById("valorPagarGlobal").value = valorPagarGlobal;
    document.getElementById("valorPagarParcial").value = valorPagarParcial;
    document.getElementById("costoTotal").value = costoTotal;
    document.getElementById("consumoDiferenciaMesActualContadorParcial").value = consumoDiferenciaMesActualContadorParcial;

}

let botonCalcular = document.getElementById("btnCalculate");

botonCalcular.addEventListener("click", calcularResultado);
