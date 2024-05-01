let botao = document.getElementById("calcButtonUp");

botao.addEventListener('click', function () {
    console.log("Clicou no botão Up!");
    CalcEXP();
});

function CalcEXP() {
    const nivelPokemon = parseInt(document.getElementById("nvPKM").value);
    const nivelOponente = parseInt(document.getElementById("nvADV").value);
    const statusBaseOponente = parseInt(document.getElementById("StBase").value);
    const ExpBox = parseInt(document.getElementById("ExpBox").value);
    const resultado = document.getElementById("resultado").value;
    const NvTreino = document.getElementById("NvTreino").value;
    const batalha = document.getElementById("batalha").value;
    const ItensTreino = document.getElementById("ItensTreino").value;

    // Valores dos multiplicadores
    const multiplicadores = {
        "--": 1,
        "LuckyEgg": 2,
        "ExpShare": 0.5,
        "monotreinamento": 1.5,
        "penalidade": 0.25,
        "vitoria": 1,
        "empate": 0.75,
        "derrota": 0.5,
        "selvagem": 0.25,
        "gym": 2,
        "pvp": 1.5,
        "SS": 2.5,
        "S": 2,
        "A": 1.5,
        "B": 0.75,
        "C": 0.5,
        "D": 0.25
    };

    // Verificar se os checkboxes estão marcados e aplicar os multiplicadores
    let expGanhoBatalha = ((nivelOponente * statusBaseOponente) / 7) * multiplicadores[resultado] * multiplicadores[batalha];
    let expGanhoTreino = (806 / 9) * multiplicadores[NvTreino];
    // Aplicar multiplicadores de itens de treinamento se estiverem marcados
    if (document.getElementById("LuckyEgg").checked) {
        expGanhoTreino *= multiplicadores["LuckyEgg"];
    }
    if (document.getElementById("ExpShare").checked) {
        expGanhoTreino *= multiplicadores["ExpShare"];
    }
    if (document.getElementById("monotreinamento").checked) {
        expGanhoTreino *= multiplicadores["monotreinamento"];
    }
    if (document.getElementById("penalidade").checked) {
        expGanhoTreino *= multiplicadores["penalidade"];
    }

    const expTotal = expGanhoBatalha + expGanhoTreino + ExpBox;

    let novoNivel = nivelPokemon;
    let expSobrando = expTotal;

    // Calcular exp necessária para o próximo nível
    let expNecessaria = ((nivelPokemon * nivelPokemon * nivelPokemon) / 5) * multiplicadores[resultado];

    while (expSobrando >= expNecessaria) {
        novoNivel++;
        expSobrando -= expNecessaria;
    }

    // Exibir os resultados na página
    let resultadoExp = 0;
    if (expGanhoBatalha > 0) {
        resultadoExp = expGanhoBatalha;
    } else if (expGanhoTreino > 0) {
        resultadoExp = expGanhoTreino;
    }
    const resultadoBattle = document.getElementById("resultadoBattle");
    resultadoBattle.innerHTML = Math.trunc(resultadoExp);
    const NvNivel = document.getElementById("LvUp");
    NvNivel.innerHTML = Math.trunc(novoNivel);
    const ExpRestante = document.getElementById("ExpRestante")
    ExpRestante.innerHTML = Math.trunc(expSobrando)
}
