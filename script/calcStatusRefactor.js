// const chalk = require("chalk");
// const prompt = require('prompt-sync')({sigint: true});
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

export function calcStatus() {
    let Pontos_De_Saude = []
    let Ataque_Fisico = []
    let Ataque_Especial = []
    let Defesa_Fisica = []
    let Defesa_Especial = []
    let Velocidade = []
    let Chance_Critico = 100;
    let Evasiva = 100;
    console.log("Função foi chamada");
    let Nivel = parseInt(document.getElementById("nivel").value)
    let Natureza = document.getElementById("natureza").value
    let Evs_HP = parseInt(document.getElementById("evHp").value)
    let Evs_Ataque_Fisico =  parseInt(document.getElementById("evAtaque").value)
    let Evs_Ataque_Especial = parseInt(document.getElementById("evSpAtk").value)
    let Evs_Defesa_Fisica =  parseInt(document.getElementById("evDefesa").value)
    let Evs_Defesa_Especial = parseInt(document.getElementById("evSpDef").value)
    let Evs_Velocidade =  parseInt(document.getElementById("evSpeed").value)
    //STATUS BASE
    let Pontos_De_Saude_Base =  parseInt(document.getElementById("baseHp").value)
    let Ataque_Fisico_Base = parseInt(document.getElementById("baseAtaque").value)
    let Ataque_Especial_Base =  parseInt(document.getElementById("baseSpAtk").value)
    let Defesa_Fisica_Base = parseInt(document.getElementById("baseDefesa").value)
    let Defesa_Especial_Base =  parseInt(document.getElementById("baseSpDef").value)
    let Velocidade_Base =  parseInt(document.getElementById("baseSpeed").value)
    // // BASE DE CALCULO STATUS
    Pontos_De_Saude = ((31+(Evs_HP/4)+2*Pontos_De_Saude_Base)*Nivel/100)+10+Nivel
    
    let natureCalcResult = natureResult(Natureza)
        Ataque_Fisico = ((((2 * Ataque_Fisico_Base + 31 + (Evs_Ataque_Fisico / 4)) * Nivel) / 100) + 5) * natureCalcResult.Ataque_Fisico
        Defesa_Fisica = ((((2 * Defesa_Fisica_Base + 31 + (Evs_Defesa_Fisica / 4)) * Nivel) / 100) + 5) * natureCalcResult.Defesa_Fisica
        Ataque_Especial = ((((2 * Ataque_Especial_Base + 31 + (Evs_Ataque_Especial / 4)) * Nivel) / 100) + 5)* natureCalcResult.Ataque_Especial
        Defesa_Especial = ((((2 * Defesa_Especial_Base + 31 + (Evs_Defesa_Especial / 4)) * Nivel) / 100) + 5)* natureCalcResult.Defesa_Especial
        Velocidade = ((((2 * Velocidade_Base + 31 + (Evs_Velocidade / 4)) * Nivel) / 100) + 5)* natureCalcResult.Velocidade
    
    const hpTag = document.getElementById("hpResult");
    const atkFisTag = document.getElementById("atkResult");
    const atkEspTag = document.getElementById("spAtkResult");
    const DefFis = document.getElementById("defResult");
    const spDefTag = document.getElementById("spDefResult");
    const speedTag = document.getElementById("speedResult");
    
    
    hpTag.innerHTML = Math.trunc(Pontos_De_Saude);
    atkFisTag.innerHTML = Math.trunc(Ataque_Fisico)
    atkEspTag.innerHTML = Math.trunc(Ataque_Especial)
    DefFis.innerHTML = Math.trunc(Defesa_Fisica)
    spDefTag.innerHTML = Math.trunc(Defesa_Especial)
    speedTag.innerHTML = Math.trunc(Velocidade);
    
    //console.log("HP POKÉMON: ", Math.trunc(Pontos_De_Saude));
    //console.log("Ataque Fisico: ", Math.trunc(Ataque_Fisico));
    //console.log("Defesa Fisica: ", Math.trunc(Defesa_Fisica));
    //console.log("Ataque Especial: ", Math.trunc(Ataque_Especial));
    //console.log("Defesa Especial: ", Math.trunc(Defesa_Especial));
    //console.log("Velocidade: ", Math.trunc(Velocidade));//
}