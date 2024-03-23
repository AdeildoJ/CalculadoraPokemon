const prompt = require('prompt-sync')({sigint: true});

let Nivel = prompt('Qual o Nível do Pokémon: ')
let hp = prompt("Qual o HP: ");
let Cond_HP = prompt("O HP do Pokémon está sob alguma condição, se sim qual?: ");
let Ataque_Fisico = prompt("Qual o ATK-F: ");
let Cond_ATK = prompt("O STATUS de ATK do Pokémon possui alguma STAGE(-1,-2,-3,-4,-5,-6,0,1,2,3,4,5,6): ");
let Defesa_Fisica = prompt("Qual a DEF-F: ");
let Cond_DEF = prompt("O STATUS de DEF do Pokémon possui alguma STAGE(-1,-2,-3,-4,-5,-6,0,1,2,3,4,5,6): ");
let Ataque_Especial = prompt("Qual o SP-ATK: ");
let Cond_SP_ATK = prompt("O STATUS de SP-ATK do Pokémon possui alguma STAGE(-1,-2,-3,-4,-5,-6,0,1,2,3,4,5,6): ");
let Defesa_Especial = prompt("Qual a SP-DEF: ");
let Cond_SP_DEF = prompt("O STATUS de SP-DEF do Pokémon possui alguma STAGE(-1,-2,-3,-4,-5,-6,0,1,2,3,4,5,6): ");
let Speed = prompt("Qual a SPEED: ");
let Cond_Speed = prompt("O STATUS de SPEED do Pokémon possui alguma STAGE(-1,-2,-3,-4,-5,-6,0,1,2,3,4,5,6): ");

//CONDIÇÕES-STAG'S
let Status_Pokemon = {
    ATK: Ataque_Fisico,
    DEF: Defesa_Fisica,
    SP_ATK: Ataque_Especial,
    SP_DEF: Defesa_Especial,
    SPEED: Speed,
};

let Stage = {
    UmNegativo: 0.6667,
    DoisNegativo: 0.5,
    TresNegativo: 0.4,
    QuatroNegativo: 0.3333,
    CincoNegativo: 0.2857,
    SeisNegativo: 0.25,
    Zero: 1,
    Um: 1.5,
    Dois: 2,
    Tres: 2.5,
    Quatro: 3,
    Cinco: 3.5,
    Seis: 4
};

function calcularNovoValor(valor, stage) {
    switch (stage) {
        case -1:
            return valor * Stage['UmNegativo'];
        case -2:
            return valor * Stage['DoisNegativo'];
        case -3:
            return valor * Stage['TresNegativo'];
        case -4:
            return valor * Stage['QuatroNegativo'];
        case -5:
            return valor * Stage['CincoNegativo'];
        case -6:
            return valor * Stage['SeisNegativo'];
        case 0:
            return valor * Stage['Zero'];
        case 1:
            return valor * Stage['Um'];
        case 2:
            return valor * Stage['Dois'];
        case 3:
            return valor * Stage['Tres'];
        case 4:
            return valor * Stage['Quatro'];
        case 5:
            return valor * Stage['Cinco'];
        case 6:
            return valor * Stage['Seis'];
        default:
            return "Stage Não Reconhecido";
    }
}

let novoATK = calcularNovoValor(Status_Pokemon['ATK'], parseInt(Cond_ATK));
let novoDEF = calcularNovoValor(Status_Pokemon['DEF'], parseInt(Cond_DEF));
let novoSP_ATK = calcularNovoValor(Status_Pokemon['SP_ATK'], parseInt(Cond_SP_ATK));
let novoSP_DEF = calcularNovoValor(Status_Pokemon['SP_DEF'], parseInt(Cond_SP_DEF));
let novoSPEED = calcularNovoValor(Status_Pokemon['SPEED'], parseInt(Cond_Speed));

console.log('NOVO ATK: ', Math.trunc(novoATK));
console.log('NOVA DEF: ', Math.trunc(novoDEF));
console.log('NOVO SP-ATK: ', Math.trunc(novoSP_ATK));
console.log('NOVO SP-DEF: ', Math.trunc(novoSP_DEF));
console.log('NOVA SPEED: ', Math.trunc(novoSPEED));

// Exemplo para a condição de HP
if (Cond_HP === "paralyse") {   
    let numeroAleatorio1 = Math.floor(Math.random() * 100);
    console.log('HP atual: ' , Math.trunc(hp))
    if (numeroAleatorio1 <= 25) {
        console.log("Pokémon Paralisado");
    }
} else if (Cond_HP === "poison") {
    veneno = Math.trunc(hp*0.125);
    console.log('NOVO HP: ' ,Math.trunc(hp-veneno)) 
} else if (Cond_HP === "sleep") {
    // Sorteando um número de 1 a 3
const numeroSorteado = Math.floor(Math.random() * 3) + 1;
console.log("Seu Pokémon ira dormir por :", numeroSorteado, "Turnos");
} else if (Cond_HP === "confusion") {
// Sorteando um número de 1 a 4
const numeroSorteado1a4 = Math.floor(Math.random() * 4) + 1;
console.log("Seu Pokémon ficará confuso por :", numeroSorteado1a4, "Turnos");    
let numeroAleatorio2 = Math.floor(Math.random() * 100);
let multiplicador, formula, calculo;
if (numeroAleatorio2 <= 50) {  
    multiplicador = 1 * 1 * 1 * 1 * 0.85;
    formula = (2 * Nivel + 10) / 250 * (Ataque_Fisico / Defesa_Fisica) * 50 + 2;
    calculo = formula * multiplicador;
    console.log('Seu Pokémon está se batendo, Dano Causado: ' , calculo);
    console.log('HP atual: ' , Math.trunc(calculo - hp));
}
} else if (Cond_HP === "freeze"){
    console.log("Seu Pokémon ficará congelado por :", numeroSorteado, "Turnos");
} else if (Cond_HP === "infatuation") {
    let numeroAleatorio2 = Math.floor(Math.random() * 100);
    if (numeroAleatorio2 <= 50) {
        console.log("Seu Pokémon está apaixonado pelo alvo");
        console.log("NOVO HP: " , Math.trunc(hp));
    }
} else if (Cond_HP === "trap"){
    console.log("Seu Pokémon não pode fugir da batalha");
    console.log('NOVO HP:', Math.trunc(hp));
} else {
    console.log("Hp sem condição");   
}
