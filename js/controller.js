var nome = "Renato Felix";
var peso = 76.00;
var altura = 1.78;
var imc = peso / (altura**2);
var Situacao = null;

if (imc < 18.5) {
    situacao = 'Magreza';
} else if (imc >= 18.5 && imc <= 24.9) {
    situacao = 'Normal';
} else if (imc > 24.9 && imc <= 30) {
    situacao = 'Sobrepeso';
} else {
    situacao = 'Obesidade';
}

var spanNome = document.getElementById("nome");
spanNome.innerHTML = nome;

var spanPeso = document.getElementById("peso");
spanPeso.innerHTML = peso;

var spanAltura = document.getElementById("altura");
spanAltura.innerHTML = altura;

var spanImc = document.getElementById("imc");
spanImc.innerHTML = imc.toFixed(2);

var spanSituacao = document.getElementById("situacao");
spanSituacao.innerHTML = situacao;