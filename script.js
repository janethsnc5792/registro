function sumar() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    let n3 = Number(document.getElementById("numero3").value);
    let n4 = Number(document.getElementById("numero4").value);
    let n5 = Number(document.getElementById("numero5").value);
    let suma = n1 + n2 + n3 + n4 + n5;

    document.getElementById("promedio").innerHTML =
        "El promedio final es: " + suma;
}