function handleSubmit(event) {
    event.preventDefault();

var numeroA = document.getElementById("numeroA").value;
var numeroB = document.getElementById("numeroB").value;

var pampa1 = parseFloat(numeroA);
var pamp2 = parseFloat(numeroB);

if (pamp2 > pampa1){
    alert ("correto")
}else {
    alert("NumeroA tem que ser menor que o numeroB")
}
}