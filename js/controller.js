var nome = "Renato Felix";
var peso = 76.00;
var altura = 1.78;
var imc = peso / (altura**2);

var spanNome = document.getElementById("nome");
spanNome.innerHTML = nome;

var spanPeso = document.getElementById("peso");
spanPeso.innerHTML = peso;

var spanAltura = document.getElementById("altura");
spanAltura.innerHTML = altura;

var spanImc = document.getElementById("imc");
spanImc.innerHTML = imc.toFixed(2);