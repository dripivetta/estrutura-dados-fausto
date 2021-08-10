function buscaSequencial (vetor, valorBusca, funComparacao){
    for (let i = 0; i <vetor.length; i++){
        // Em vez de fazer a comparação dentro da função de busca,
        // 'terceirizamos' essa comparação chamando uma função externa
        if (funComparacao(vetor[i] === valorBusca)) return i // Retorna a posição onde foi encontrado
    }
    return -1 // Valor de busca não encontrado
}

//  function comparaNome(objNome, valorBusca){
//        return objNome.first_name === valorBusca
//  }

//  ela pode ser uma arrow function
const compararNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import {objNomes} from '.includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNome, 'FAUSTO', comparaNome))