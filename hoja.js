function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var Dolar = 4.11;
    var euro = 4.85;
    if (document.getElementById("uno").checked){
        resultado = valore / Dolar;
        alert("El cambio de Pesos a Dolares es: $" + resultado.toFixed(2));

    }

    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros es: " + resultado.toFixed(2));

    }

    else {
        alert("Tienes que completar todos los requerimientos")
    }

}