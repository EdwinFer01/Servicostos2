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
//formatea numero a miles y millones

function formatNumberAsThousandsOrMillions(number) {
    const suffixes = ["K", "M", "B", "T"];
    const exponent = Math.floor(Math.log10(number) / 3);
    const suffix = suffixes[exponent];
    const formattedNumber = (number / Math.pow(10, exponent * 3)).toFixed(1);
    return `${formattedNumber}${suffix}`;
}

// funcion calcula los costos
function calcularResultado() {
    //obtiene variables del html
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let consumoTotal = parseFloat(document.getElementById("consumoTotal").value);
    let costosFijos = parseFloat(document.getElementById("costosFijos").value);
    let consumoMesActualContadorParcial = parseFloat(
        document.getElementById("consumoMesActualContadorParcial").value
    );
    let consumoMesAnteriorParcial = parseFloat(
        document.getElementById("consumoMesAnteriorParcial").value
    );
  



    //Calculamos los valores a pagar
    let costoUnidad = subtotal / consumoTotal;
    let costoUnidadRedondeado = costoUnidad.toFixed(2); // Redondea a dos decimales
    let nuevosCostoFijo = costosFijos / 2;
    let diferenciaMesActualParcial =
        consumoMesActualContadorParcial - consumoMesAnteriorParcial;
    let consumoDiferenciaMesActualContadorGlobal =
        consumoTotal - diferenciaMesActualParcial;
    let consumoDiferenciaMesActualContadorGlobalRedondeado =
        consumoDiferenciaMesActualContadorGlobal.toFixed(2);
    let valorPagarGlobal =
        consumoDiferenciaMesActualContadorGlobal * costoUnidad + nuevosCostoFijo;
    let valorPagarGlobalRedondeado = valorPagarGlobal.toFixed(2);

    let valorPagarParcial =
        diferenciaMesActualParcial * costoUnidad + nuevosCostoFijo;
    let valorPagarParcialRedondeado = valorPagarParcial.toFixed(2);

    let costoTotal = valorPagarGlobal + valorPagarParcial;

    let consumoDiferenciaMesActualContadorParcial =
        consumoMesActualContadorParcial - consumoMesAnteriorParcial;
    let consumoDiferenciaMesActualContadorParcialRedondeado =
        consumoDiferenciaMesActualContadorParcial.toFixed(2);
        // Obtener la fecha actual
 
    //agrego el valor de cada variable al formulario respectivamente
    document.getElementById("costoUnidad").value = costoUnidadRedondeado;
    document.getElementById("consumoDiferenciaMesActualContadorGlobal").value =
        consumoDiferenciaMesActualContadorGlobalRedondeado;
    document.getElementById("valorPagarGlobal").value =
        valorPagarGlobalRedondeado;
    document.getElementById("valorPagarParcial").value =
        valorPagarParcialRedondeado;
    document.getElementById("costoTotal").value = costoTotal;
    document.getElementById("consumoDiferenciaMesActualContadorParcial").value =
        consumoDiferenciaMesActualContadorParcialRedondeado;
}

// activa el boton calcular
let botonCalcular = document.getElementById("btnCalculate");
botonCalcular.addEventListener("click", calcularResultado);

/*
document.getElementById('formulario1').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtén los valores de los campos del formulario
    const subtotal = document.getElementById('subtotal').value;
    const consumoTotal = document.getElementById('consumoTotal').value;
    const costoUnidad = document.getElementById('costoUnidad').value;
    const costosFijos = document.getElementById('costosFijos').value;
    const consumoMesActualContadorParcial = document.getElementById('consumoMesActualContadorParcial').value;
    const consumoMesAnteriorParcial = document.getElementById('consumoMesAnteriorParcial').value;
    const consumoDiferenciaMesActualContadorGlobal = document.getElementById('consumoDiferenciaMesActualContadorGlobal').value;
    const consumoDiferenciaMesActualContadorParcial = document.getElementById('consumoDiferenciaMesActualContadorParcial').value;
    const valorPagarGlobal = document.getElementById('valorPagarGlobal').value;
    const valorPagarParcial = document.getElementById('valorPagarParcial').value;
    const costoTotal = document.getElementById('costoTotal').value;
    const fechaActual = document.getElementById('fechaActual').value;

    // Construye un objeto JSON con los datos
    const datos = {
        subtotal: subtotal,
        consumoTotal: consumoTotal,
        costoUnidad: costoUnidad,
        costosFijos: costosFijos,
        consumoMesActualContadorParcial: consumoMesActualContadorParcial,
        consumoMesAnteriorParcial: consumoMesAnteriorParcial,
        consumoDiferenciaMesActualContadorGlobal: consumoDiferenciaMesActualContadorGlobal,
        consumoDiferenciaMesActualContadorParcial: consumoDiferenciaMesActualContadorParcial,
        valorPagarGlobal: valorPagarGlobal,
        valorPagarParcial: valorPagarParcial,
        costoTotal: costoTotal,
        fechaActual: fechaActual
    };

    // Convierte el objeto JSON a una cadena JSON
    const datosJSON = JSON.stringify(datos);

    // Realiza la solicitud HTTP POST a la URL de Power BI con la cadena JSON
    fetch('https://api.powerbi.com/beta/71b3c6d9-bc93-4143-916d-d870154f1da5/datasets/2013677c-bd83-41cc-a01b-992f73aa9229/rows?experience=power-bi&key=XjSCVhPljd2UBzSDGqrec%2BwMZ6UUb74DkaiW9xWMxbWaSS1j1LUU02Tpode1WUEm0hkUm6zOknBWBI5Hom8CNQ%3D%3D', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: datosJSON
    })
    .then(response => {
        if (response.ok) {
            alert('Datos enviados exitosamente a Power BI.');
        } else {
            alert('Error al enviar los datos a Power BI.');
        }
    })
    .catch(error => {
        alert('Error al enviar los datos a Power BI: ' + error);
    });
});
*/