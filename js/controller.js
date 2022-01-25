var pacientes = []; // vetor vazio
var botao = document.getElementById("calcular");
botao.addEventListener('click', function() {
                                    var paciente = lePaciente();
                                    pacientes.push(paciente); // Adiciona o paciente ao Vetor 
                                    mostraPaciente( paciente );
                                });

var botaoRel = document.getElementById("relatorio"); // <button type="button" id="relatorio">Gerar Relatório</button>
botaoRel.addEventListener('click', function() {
                                        geraRelatorio(pacientes);
                                    });