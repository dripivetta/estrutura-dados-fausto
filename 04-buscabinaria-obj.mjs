let comparacao

function buscaBinaria (vetor, fnComp){
    comparacao = 0
    let ini = 0
    let fim = vetor.length -1
    let meio
    while (fim>= ini){
        meio = Math.floor ((fim+ini) / 2) // Math.floor()arredonda para baixo
        switch (fnComp(vetor[meio])){
            case 0: // Achou
                comparacao++
                return meio
                break
            case 1: // Valor de busca é MAIOR
                comparacao +=2
                ini = meio+1
                break
            default:
                comparacao +=2
                fim = meio -1
        }
    }
    return -1 // Não existe
}

// A função de comparação para a busca binária precisa retornar um de três valores:
// retorno 0: o valor de busca e o valor no objeto são iguals
// retorno -1: o valor de busca é MENOR que o valor no objeto
// retorno 1: o valor de busca é MAIOR que o valor no objeto
const comparaNome = (obj, busca = 'FAUSTO') => {
    const busca = 'FAUSTO'
    if (busca === obj.first_name) return 0
    else if ('FAUSTO' < obj.first_name) return -1
    else return 1
} // ESSA FUNÇÃO É APENAS O MODELO PARA COMO VAI SER A BUSCA NAS DEMAIS FUNÇÕES EM BAIXO
 // CADA NOME VAI TER SUA BUSCA COM UMA FUNÇÃO PERSONALIZADA

import {objNomes} from './includes/vetor-obj-nomes.mjs' // NÂO TENHO ESTE ARQUIVO
// A BUSCA SEQUÊNCIAL SO VAI CONSEGUIR FAZER A BUSCA PELOS NOMES, PORQUE OS NOMES É A ÚNICA PROPRIEDADE QUE ESTA ORDENADA

console.time ('Buscando LAMARA')
console.log (buscaBinaria(objNomes, (obj, busca = 'LAMARA') => {
        if (busca === obj.first_name) return 0
        else if (busca < obj.first_name) return -1
        else return 1
}), {comparacoes} )
console.timeEnd ('Buscando LAMARA')