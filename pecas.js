//declaração de variavel

var listadePeca = ["Filtro de Ar","Motor","Amortecedor"] 

//verificação 01
//verifica se a lista tem menos de 10 itens

if(listadePeca.length < 10){ 

   //Retorna mensagem ao usuario que é possivel cadastrar peças
    console.log("E possivel cadastrar mais peças")
}else{ 

    //retora mensagem ao usuario que não é possivel mias cadastro de peças
    console.log("Não tem mais espaço na lista")
}

//Verificação 02
// daclaração de nova variavel

let peso = 50;
// inicio e declaração da condição
if(peso <100){

    //Retorna mensagem para o usuario peça deve pesar 100g
    console.log("A peça deve pesar no minimo 100g");

}else{

    //mensagem para o usuario de peso adequado
    console.log("Apeça posui peso adequado");
}//fim da consição

// Verificação 03
//declaração de variavel
let nomePeca = "Disco de Freio";

// Inicio da verificação
if(nomePeca.length >3){
    //menagem para oa usuario
    console.log("Nome de peça está adequado para o cadastro");

}else if(nomePeca.length == 0){
    console.log("O nome da Peça não pode ser vazio")
}else{
    //mensagem para oa usuario
    console.log("O nome deve ter mais de 3 caracteres, Digite um nome adequado")
}//fim da terceira condição

// = -> atribuição de valor -> recebe
// == -> verificação se o valores são iguais -> É igual?
// === -> verificação se o valor e o tipo de valor são iguais

// let idade = 23
// if (idade === "23")

// Exemplo com switch case

switch(nomePeca.length){
    case 0:
        console.log("O nome da peças não pode ser vazio")
        break;

        case 1:
        case 3:
        case 3:
    console.log("O nome deve ter mais de 3 caracteres")

    default:
        console.log("Nome da peça está adeuado");
        break;
}
