function calculaIMC(peso,altura) {
    var imc = peso / (altura**2);
    return imc;
}

function verificaIMC(imc) {
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
    return situacao;
}
function mostraPaciente(nomePaciente, pesoPaciente, alturaPaciente) {
    var imc = calculaIMC(pesoPaciente, alturaPaciente);
    var situação = verificaIMC(imc);

    var spanNome = document.getElementById("nome");
spanNome.innerHTML = nomePaciente;

var spanPeso = document.getElementById("peso");
spanPeso.innerHTML = pesoPaciente;

var spanAltura = document.getElementById("altura");
spanAltura.innerHTML = alturaPaciente;

var spanImc = document.getElementById("imc");
spanImc.innerHTML = imc.toFixed(2);

var spanSituacao = document.getElementById("situacao");
spanSituacao.innerHTML = situacao;


}