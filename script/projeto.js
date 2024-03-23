const prompt = require('prompt-sync')({sigint: true});
const chalk = require('chalk');

// CALCULADORA DE DANO
function calcularDano(Nivel, atk, def, dg, outros, critico, efetivo, stab, hp) {
    console.log("LEVEL: " + Nivel);
    console.log("ATAQUE: " + atk);
    console.log("DEFESA: " + def);
    console.log("DANO: " + dg);
    console.log("OUTROS: " + outros);
    console.log("CRITICO: " + critico);
    console.log("EFETIVO: " + efetivo);
    console.log("STAB: " + stab);
    console.log("PONTOS DE SAÚDE: " + hp);

    let multiplicador = outros * critico * efetivo * stab * 0.85;
    let formula = (2 * Nivel + 10) / 250 * (atk / def) * dg + 2;
    return formula * multiplicador;
}
let Nivel = prompt("Informe o Nível do Pokémon atacante: ");
let atk = prompt("Informe o Ataque físico/especial: ");
let def = prompt("Informe a Defesa física/especial do adversário: ");
let dg = prompt("Informe o Dano do ataque lançado: ");
let outros = prompt("Algo favorece seu ataque (Sim/Não): ").toLowerCase(); // Converter para minúsculas para evitar problemas de comparação
let critico = 1;
if (outros === "sim") {
    console.log(outros = 1.5);
} else {
    console.log(outros = 1);
}
let efetivo = prompt("Quão efetivo é seu golpe: ");
let stab = prompt("O ataque lançado é do mesmo tipo do usuário (Sim/Não): ").toLowerCase(); // Converter para minúsculas
if (stab === "sim") {
    console.log(stab = 1.5);
} else {
    console.log(stab = 1);
}
let hp = prompt("Qual o HP (Pontos de Saúde) do alvo: ");

let numeroAleatorio = Math.floor(Math.random() * 100);
if (numeroAleatorio <= 5) {
    console.log("Critico: ", critico = 1.5);
} else {
    console.log("Critico: ", critico = 1);
}

const danoCausado = calcularDano(Nivel, atk, def, dg, outros, critico, efetivo, stab, hp);
console.log(chalk.yellow("DANO CAUSADO:"), danoCausado.toFixed(0));
console.log(chalk.red("HP RESTANTE: "), (hp - danoCausado).toFixed(0));
