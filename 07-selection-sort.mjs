/*
    SELECTION SORT
    Trata-se de uma otimização do bubble sort, diminuindo drasticamente o número de trocas necessárias
    para fazer a ordenação.
    Isola um dos valores do vetor e procura pelo menor valor entre o restante, promovendo a troca caso
    o primeiro valor seja maior que o segundo.
*/

let trocas, passada, comparacoes

function selectionSort (vetor){
    trocas = 0, passada = 0, comparacoes =0

    function encontrarMenor (inicio){
        let menor = inicio
        // Esse loop vai até a última posição
        for (let j = inicio + 1; j < vetor.length; j++){
            if (vetor[j] < vetor[menor]) menor = j
            comparacoes ++
        }
        return menor
    }
    // Percurso do vetor até a PENULTIMA posição
    for (let i = 0; i <= vetor.length - 2; i++){
        passada ++
        let menor = encontrarMenor (i+1)
        if (vetor[menor] < vetor[i]) {
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
            trocas ++
        }
        comparacoes ++
    }
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
selectionSort (nums)
console.log (nums)
console.log ({trocas, passada, comparacoes})

// Vetor invertido
let nums2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
selectionSort (nums2)
console.log (nums2)
console.log ({trocas, passada, comparacoes})

// Vetor já ordenado 
let nums3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
selectionSort (nums3)
console.log (nums3)
console.log ({trocas, passada, comparacoes})

import {nomes} from './includes/100-mil-nomes.mjs'
console.time ('Ordenando nomes...')
selectionSort(nomes)
console.timeEnd ('Ordenando nomes...')
console.log ('DEPOIS:', nomes)
console.log({trocas, passada, comparacoes})