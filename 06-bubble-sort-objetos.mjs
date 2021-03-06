let totTrocas, passada, comparacoes

function bubbleSort (vetor, fnComp){
    totTrocas =0
    passada = 0
    comparacoes = 0
    let trocas
    do {
        trocas = 0 // Iniciando uma nova passada
        passada ++

        // Percorre o vetor, da primeira até a PEÚLTIMA posição
        for ( let i = 0; i <= vetor.length - 2; i++){
            // if (vetor [i] > vetor [i +1]){ no objetos essa linha vai ser trocada por:
            if (fnComp(vetor[i], vetor[i+1])){
            // Troca
            // tel aux = vetor[i]
            // vetor [i] = vetor [i+1]
            // vetor [i+1] = aux

            // troca direta em JS via desestruturação de vetor
            [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
            trocas ++
            }
            comparacoes ++
        }
        totTrocas += trocas

    } while (trocas > 0)
}

import {candidatos} from './includes/candidatos-2018.mjs'

console.log ('ANTES:', candidatos)
console.time ('Ordenando candidatos...')
// Ordenando pelo nome de uma urna (NM_URNA_CANDIDATO)
bubbleSort (candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd ('Ordenando candidatos...')
console.log ('DEPOIS:', candidatos)
console.log ({totTrocas, passada, comparacoes})