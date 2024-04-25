let botao = document.getElementById("calcButtonDano");

botao.addEventListener('click', function () {
    console.log("Clicou no botão!");
    calcularDano();
});

function calcularDano() {
    let evasiva = document.getElementById("evasiva").value;
    let precisao = parseInt(document.getElementById("acc").value);
    let danoCausado = parseInt(document.getElementById("ResultDano").value);
    let Nivel = parseInt(document.getElementById("nv").value);
    let atk = parseInt(document.getElementById("ATK").value);
    let def = parseInt(document.getElementById("Def").value);
    let dg = parseInt(document.getElementById("Dano").value);
    let outros, critico, efetivo, stab;

    let numeroAleatorioI = Math.floor(Math.random() * 100);
    let numeroAleatorioII = Math.floor(Math.random() * 150);
    let numeroAleatorioIII = Math.floor(Math.random() * 200);
    let numeroAleatorioCriticoI = Math.floor(Math.random() * 100);
    
    if (evasiva === "evasivaI" && numeroAleatorioI >= precisao) {
        danoCausado = "Errou"; // Atualiza o valor diretamente, não precisa usar push
    } else if (evasiva === "evasivaII" && numeroAleatorioII >= precisao) {
        danoCausado = "Errou";
    } else if (evasiva === "evasivaIII" && numeroAleatorioIII >= precisao) {
        danoCausado = "Errou";
    } else {
        outros = document.getElementById("outros").value === "sim" ? 1.5 : 1;
        
        efetivo = document.getElementById("efetivo").value;
        switch (efetivo) {
            case "SuperResistente":
                efetivo = 0.25;
                break;
            case "Resistente":
                efetivo = 0.5;
                break;
            case "Efetivo":
                efetivo = 2;
                break;
            case "SuperEfetivo":
                efetivo = 4;
                break;
            default:
                efetivo = 1;
        }
        
        stab = document.getElementById("stab").value === "sim" ? 1.5 : 1;

        critico = document.getElementById("critico").value; // Atribuir o valor de critico antes de usar
        
        if (critico === "criticoI" && numeroAleatorioCriticoI <= 7) {
            critico = 1.5;
        } else if (critico === "criticoII" && numeroAleatorioCriticoI <= 13) {
            critico = 1.5;
        } else if (critico === "criticoIII" && numeroAleatorioCriticoI <= 25) {
            critico = 1.5;
        } else {
            critico = 1;   
        }

        let multiplicador = outros * critico * efetivo * stab * 0.85;
        let formula = (2 * Nivel + 10) / 250 * (atk / def) * dg + 2;
        danoCausado = formula * multiplicador;
    }
    
    console.log("DANO CAUSADO:", Math.trunc(danoCausado));
    
    // Atualizar o HTML com o valor do dano causado
    document.getElementById("ResultDano").innerHTML = Math.trunc(danoCausado);
}
