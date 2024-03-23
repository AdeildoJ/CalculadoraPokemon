const chalk = require("chalk");
const prompt = require('prompt-sync')({sigint: true});
const neutro = ["hardy","docile","bashful","quirky","serious"]
function natureResult(nature) {
    let result = {}
    switch (nature) {
        case "lonely":
            result.Ataque_Fisico = 1.1
            result.Defesa_Fisica = 0.9
            result.Ataque_Especial = 1
            result.Defesa_Especial = 1
            result.Velocidade = 1

            return result
            case "adamant":
                result.Ataque_Fisico = 1.1
                result.Defesa_Fisica = 1
                result.Ataque_Especial = 0.9
                result.Defesa_Especial = 1
                result.Velocidade = 1
    
                return result
                case "naughty":
                    result.Ataque_Fisico = 1.1
                    result.Defesa_Fisica = 1
                    result.Ataque_Especial = 1
                    result.Defesa_Especial = 0.9
                    result.Velocidade = 1
        
                    return result
                    case "brave":
                        result.Ataque_Fisico = 1.1
                        result.Defesa_Fisica = 1
                        result.Ataque_Especial = 1
                        result.Defesa_Especial = 1
                        result.Velocidade = 0.9
            
                        return result
                        case "bold":
                        result.Ataque_Fisico = 0.9
                        result.Defesa_Fisica = 1.1
                        result.Ataque_Especial = 1
                        result.Defesa_Especial = 1
                        result.Velocidade = 1
            
                        return result
                        case "impish":
                        result.Ataque_Fisico = 1
                        result.Defesa_Fisica = 1.1
                        result.Ataque_Especial = 0.9
                        result.Defesa_Especial = 1
                        result.Velocidade = 1
            
                        return result
                        case "lax":
                        result.Ataque_Fisico = 1
                        result.Defesa_Fisica = 1.1
                        result.Ataque_Especial = 1
                        result.Defesa_Especial = 0.9
                        result.Velocidade = 1
            
                        return result
                        case "relaxed":
                        result.Ataque_Fisico = 1
                        result.Defesa_Fisica = 1.1
                        result.Ataque_Especial = 1
                        result.Defesa_Especial = 1
                        result.Velocidade = 0.9
            
                        return result
                        case "modest":
                        result.Ataque_Fisico = 0.9
                        result.Defesa_Fisica = 1
                        result.Ataque_Especial = 1.1
                        result.Defesa_Especial = 1
                        result.Velocidade = 1
            
                        return result
                        case "mild":
                            result.Ataque_Fisico = 1
                            result.Defesa_Fisica = 0.9
                            result.Ataque_Especial = 1.1
                            result.Defesa_Especial = 1
                            result.Velocidade = 1
                
                        return result
                            case "rash":
                                result.Ataque_Fisico = 1
                                result.Defesa_Fisica = 1
                                result.Ataque_Especial = 1.1
                                result.Defesa_Especial = 0.9
                                result.Velocidade = 1
                    
                            return result
                                case "quiet":
                                    result.Ataque_Fisico = 1
                                    result.Defesa_Fisica = 1
                                    result.Ataque_Especial = 1.1
                                    result.Defesa_Especial = 1
                                    result.Velocidade = 0.9
                        
                                return result
                                    case "calm":
                                        result.Ataque_Fisico = 0.9
                                        result.Defesa_Fisica = 1
                                        result.Ataque_Especial = 1
                                        result.Defesa_Especial = 1.1
                                        result.Velocidade = 1
                            
                                    return result
                                        case "gentle":
                                            result.Ataque_Fisico = 1
                                            result.Defesa_Fisica = 0.9
                                            result.Ataque_Especial = 1
                                            result.Defesa_Especial = 1.1
                                            result.Velocidade = 1
                                
                                        return result
                                            case "careful":
                                                result.Ataque_Fisico = 1
                                                result.Defesa_Fisica = 1
                                                result.Ataque_Especial = 0.9
                                                result.Defesa_Especial = 1.1
                                                result.Velocidade = 1
                                    
                                            return result
                                                case "sassy":
                                                    result.Ataque_Fisico = 1
                                                    result.Defesa_Fisica = 1
                                                    result.Ataque_Especial = 1
                                                    result.Defesa_Especial = 1.1
                                                    result.Velocidade = 0.9
                                        
                                                return result
                                                    case "calm":
                                                        result.Ataque_Fisico = 1
                                                        result.Defesa_Fisica = 1
                                                        result.Ataque_Especial = 1
                                                        result.Defesa_Especial = 1
                                                        result.Velocidade = 1.1
                                            
                                                    return result
                                                        case "timid":
                                                            result.Ataque_Fisico = 0.9
                                                            result.Defesa_Fisica = 1
                                                            result.Ataque_Especial = 1
                                                            result.Defesa_Especial = 1
                                                            result.Velocidade = 1.1
                                                
                                                        return result
                                                            case "hasty":
                                                                result.Ataque_Fisico = 1
                                                                result.Defesa_Fisica = 0.9
                                                                result.Ataque_Especial = 1
                                                                result.Defesa_Especial = 1
                                                                result.Velocidade = 1.1
                                                    
                                                            return result
                                                                case "jolly":
                                                                    result.Ataque_Fisico = 1
                                                                    result.Defesa_Fisica = 1
                                                                    result.Ataque_Especial = 0.9
                                                                    result.Defesa_Especial = 1
                                                                    result.Velocidade = 1.1
                                                        
                                                                return result
                                                                    case "naive":
                                                                        result.Ataque_Fisico = 1
                                                                        result.Defesa_Fisica = 1
                                                                        result.Ataque_Especial = 1
                                                                        result.Defesa_Especial = 0.9
                                                                        result.Velocidade = 1.1
                                                            
                                                                    return result
                                                                        case "hardy":
                                                                            case "docile":
                                                                                case "bashful":
                                                                                    case "quirky":
                                                                                        case "serious":
                                                                            result.Ataque_Fisico = 1
                                                                            result.Defesa_Fisica = 1
                                                                            result.Ataque_Especial = 1
                                                                            result.Defesa_Especial = 1
                                                                            result.Velocidade = 1.1
                                                                
                                                                        return result
        default:
            console.log("Error");
            break;
    }
}

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

let natureCalcResult = natureResult(Natureza)

    Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5) * natureCalcResult.Ataque_Fisico
    Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5) * natureCalcResult.Defesa_Fisica
    Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)* natureCalcResult.Ataque_Especial
    Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)* natureCalcResult.Defesa_Especial
    Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)* natureCalcResult.Velocidade

console.log("HP POKÉMON: ", Math.trunc(Pontos_De_Saude));
console.log("Ataque Fisico: ", Math.trunc(Ataque_Fisico));
console.log("Defesa Fisica: ", Math.trunc(Defesa_Fisica));
console.log("Ataque Especial: ", Math.trunc(Ataque_Especial));
console.log("Defesa Especial: ", Math.trunc(Defesa_Especial));
console.log("Velocidade: ", Math.trunc(Velocidade));