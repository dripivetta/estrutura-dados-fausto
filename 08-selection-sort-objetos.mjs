let trocas, passada, comparacoes

function selectionSort (vetor, fnComp){
    trocas = 0, passada = 0, comparacoes =0

    function encontrarMenor (inicio){
        let menor = inicio
        // Esse loop vai até a última posição
        for (let j = inicio + 1; j < vetor.length; j++){
            //if (vetor[j] < vetor[menor]) menor = j
            // Na passagem para a função de comparação a ordem dos objetos precisa ser invertida
            if (fnComp(vetor[menor], vetor[j])) menor = j
            comparacoes ++
        }
        return menor
    }
    // Percurso do vetor até a PENULTIMA posição
    for (let i = 0; i <= vetor.length - 2; i++){
        passada ++
        let menor = encontrarMenor (i+1)
        //if (vetor[menor] < vetor[i]) {
        // Parâmetros em ordem invertida
        if (fnComp(vetor[i], vetor[menor])){
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
            trocas ++
        }
        comparacoes ++
    }
}

// Função de comparação retorna true caso o PRIMEIRO objeto seja MAIOR que o segundo

import {candidatos} from './includes/candidatos-2018.mjs'

console.log ('ANTES:', candidatos)
console.time ('Ordenando candidatos...')
// Ordenando pelo nome de uma urna (NM_URNA_CANDIDATO)
selectionSort (candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd ('Ordenando candidatos...')
console.log ('DEPOIS:', candidatos)
console.log ({trocas, passada, comparacoes})