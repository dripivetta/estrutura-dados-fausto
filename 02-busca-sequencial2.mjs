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

import {objNomes} from '.includes/vetor-obj-nomes.mjs' // NÃO TENHO ESTE ARQUIVO

console.log(buscaSequencial(objNome, 'FAUSTO', comparaNome))
// Mas pode ser feiro a arrow funcion juntdo da chamada
console.logo(buscaSequencial(objNome, 'FAUSTO', (obj, busca) => Object.first_name === busca))

// PROFESSOR MUDOU A FUNÇÃO PARA 
function buscaSequencial (vetor, funComparacao){
    for (let i = 0; i <vetor.length; i++){
        // Em vez de fazer a comparação dentro da função de busca,
        // 'terceirizamos' essa comparação chamando uma função externa
        if (funComparacao(vetor[i])) return i // Retorna a posição onde foi encontrado
    }
    return -1 // Valor de busca não encontrado
}
console.log (buscaSequencial(objNomes, obj => obj.first_name === 'FAUSTO'))
// Primeiro nome da lista que tem mais de 1000 pessoas
let pos = buscaSequencial (objNomes, obj => obj.frequency_total > 1000)
console.log (objNomes[pos])

// Primeir nome masculino da lista com mais de 10000 registrados
let pos = buscaSequencial (objNomes, obj => obj.frequency_total > 1000 && obj.classification === 'M')
console.log (objNomes[pos])

