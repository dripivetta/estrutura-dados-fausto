/*
    MERGE SORT

    No processo de ordenação, esse algoritimo "desmonta" o vetor original contendo N elementos
    até obter N vetores de apenas um elemento cada um.
    Em seguida, usando técnicas de mesclagem(merge), "remonta" o vetor, dessa vez com os elementos já em ordem.
*/
let comparacoes
let divisoes
let juncoes

function mergeSort (vetor) {
// Não posso zerar as variáveis compracoes divisoes e juncoes, pois é uma função recursiva, ela volta e zera de novo
    function mesclar (vetorEsquerdo, vetorDireita){
        let pEsquerda = 0, pDireita = 0, vetResultado = []
        while (pEsquerda < vetorEsquerdo.length && pDireita < vetorDireita.length){
            if (vetorEsquerdo [pEsquerda] < vetorDireita [pDireita]){
                vetResultado.push (vetorEsquerdo[pEsquerda])
                pEsquerda ++
            }
            else {
                vetResultado.push (vetorDireita[pDireita])
                pDireita ++
            }
            comparacoes++
        }

        // Descobrir de qual lado sobrou
        let sobra
        // Sobra à esquerda
        if (pEsquerda < pDireita) sobra = vetorEsquerdo.slice (pEsquerda)
        // Sobra à direita
        else sobra = vetorDireita.slice (pDireita)

        // Retorna vetor de resultado  + sobras
        return[...vetResultado, ...sobra]
    }

    // Para ser "desmontado", um vetor deve ter, pelo menos, 2 elementos
    if (vetor.length > 1) {
        const meio = Math.floor (vetor.length / 2)
        // Tirar cópia de das metades
        // slice () fatia um vetor, copiando os elementos desde a posição inicial informada
        // (inclusive) até a posição final (exclusive - a posição final NÃO entra)
        let vetorEsquerdo = vetor.slice (0, meio)
        // Caso o segundo parâmetro de slice () seja omitidos, serão copiados os elementos
        // desde a a posição inforamda até a posição final
        let vetorDireita = vetor.slice (meio)
        divisoes++

        console.log({vetorEsquerdo, vetorDireita})

        // Chamada recursiva à função (chamar a função dentro da função)
        vetorEsquerdo = mergeSort (vetorEsquerdo)
        vetorDireita = mergeSort (vetorDireita)

        const vetFinal = mesclar (vetorEsquerdo, vetorDireita)
        juncoes++
        //console.log ({vetFinal})
        return vetFinal
        
    }
    return vetor // Vetor de 1 elemento, não modificado
}

// variáveis zeradas no final
comparacoes = 0, divisoes = 0, juncoes = 0
let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
let numsOrd  =  mergeSort (nums)
console.log ({numsOrd})
console.log ({comparacoes, divisoes, juncoes})

// Vetor invertido
comparacoes = 0, divisoes = 0, juncoes = 0
let nums2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let nums2Ord = mergeSort (nums2)
console.log ({nums2Ord})
console.log ({comparacoes, divisoes, juncoes})

// Vetor já ordenado 
comparacoes = 0, divisoes = 0, juncoes = 0
let nums3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let nums3Ord = mergeSort (nums3)
console.log ({nums3Ord})
console.log ({comparacoes, divisoes, juncoes})

import {nomes} from './includes/100-mil-nomes.mjs'
comparacoes =0, divisoes = 0, juncoes =0
console.time ('Ordenando nomes...')
const nomesOrd = mergeSort(nomes)
console.timeEnd ('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
// volta em Bytes
// divide 1024 para darar o resultado em kilobytes
// divide de novo por 1024 para dar o resultado em Megabytes
console.log ('DEPOIS:', nomesOrd)
console.log({comparacoes, divisoes, juncoes, memoria})