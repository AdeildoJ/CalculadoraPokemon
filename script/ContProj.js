const chalk = require("chalk");
const prompt = require('prompt-sync')({sigint: true});

let Pontos_De_Saude = []
let Ataque_Fisico = []
let Ataque_Especial = []
let Defesa_Fisica = []
let Defesa_Especial = []
let Velocidade = []
let Chance_Critico = 100;
let Evasiva = 100;
let Nivel = parseInt(prompt("Nível do Pokémon: "));
let Natureza = prompt("Qual a natureza do Pokémon: ");
let Evs_HP = parseInt(prompt("Informe o EV do HP: "));
let Evs_Ataque_Fisico = parseInt(prompt("Informe o EV do ATK-F: "));
let Evs_Ataque_Especial = parseInt(prompt("Informe o EV do SP-ATK: "));
let Evs_Defesa_Fisica = parseInt(prompt("Informe o EV do DEF-F: "));
let Evs_Defesa_Especial = parseInt(prompt("Informe o EV do SP-DEF: "));
let Evs_Velocidade = parseInt(prompt("Informe o EV do SPEED: "));
//STATUS BASE
let Pontos_De_Saude_Base = parseInt(prompt("Qual ol status base de HP: "))
let Ataque_Fisico_Base = parseInt(prompt("Qual ol status base de ATK-F: "))
let Ataque_Especial_Base = parseInt(prompt("Qual ol status base de SP-ATK: "))
let Defesa_Fisica_Base = parseInt(prompt("Qual ol status base de DEF-F: "))
let Defesa_Especial_Base = parseInt(prompt("Qual ol status base de SP-DEF: "))
let Velocidade_Base = parseInt(prompt("Qual ol status base de SPEED: "))
// BASE DE CALCULO STATUS
Pontos_De_Saude = ((31+(Evs_HP/4)+2*Pontos_De_Saude_Base)*Nivel/100)+10+Nivel

if (Natureza === "lonely") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5) * 1.1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5) * 0.9;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "adamant") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5) * 1.1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5) * 0.9;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "naughty") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5) * 1.1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5) * 0.9;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "brave") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5) * 1.1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5) * 0.9;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "bold") {
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5) * 1.1;
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5) * 0.9;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "impish") {
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5) * 1.1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5) * 0.9;
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "lax") {
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5) * 1.1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5) * 0.9;
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "relaxed") {
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5) * 1.1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5) * 0.9;
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "modest") {
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5) * 1.1;
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5) * 0.9;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "mild") {
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5) * 0.9;
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1.1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "rash") {
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5) * 0.9;
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1.1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "quiet") {
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5) * 0.9;
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1.1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "calm") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*0.9;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1.1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "gentle") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*0.9;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1.1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;  
} else if (Natureza === "careful") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*0.9;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1.1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
} else if (Natureza === "sassy") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1.1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*0.9;
} else if (Natureza === "timid") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*0.9;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1.1;
} else if (Natureza === "hasty") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*0.9;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1.1;
} else if (Natureza === "jolly") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*0.9;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1.1;
} else if (Natureza === "naive") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*0.9;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1.1;

} else if (Natureza === "hardy" || Natureza === "docile" || Natureza === "bashful" || Natureza === "quirky" || Natureza === "serious") {
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5) * 1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5) * 1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5) * 1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5) * 1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5) * 1;
} else {
    // Caso padrão (naturezas neutras)
    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5)*1;
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)*1;
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)*1;
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)*1;
}
console.log("HP POKÉMON: ", Math.trunc(Pontos_De_Saude));
console.log("Ataque Fisico: ", Math.trunc(Ataque_Fisico));
console.log("Defesa Fisica: ", Math.trunc(Defesa_Fisica));
console.log("Ataque Especial: ", Math.trunc(Ataque_Especial));
console.log("Defesa Especial: ", Math.trunc(Defesa_Especial));
console.log("Velocidade: ", Math.trunc(Velocidade));