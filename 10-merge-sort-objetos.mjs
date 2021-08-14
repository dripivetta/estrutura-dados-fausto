let comparacoes
let divisoes
let juncoes

function mergeSort (vetor, fnComp) {
// Não posso zerar as variáveis compracoes divisoes e juncoes, pois é uma função recursiva, ela volta e zera de novo
    function mesclar (vetorEsquerdo, vetorDireita){
        let pEsquerda = 0, pDireita = 0, vetResultado = []
        while (pEsquerda < vetorEsquerdo.length && pDireita < vetorDireita.length){
            // if (vetorEsquerdo [pEsquerda] < vetorDireita [pDireita]){
                if (fnComp(vetorDireita[pDireita], vetorEsquerdo[pEsquerda])){ // Parâmetros invertidos
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
        vetorEsquerdo = mergeSort (vetorEsquerdo, fnComp)
        vetorDireita = mergeSort (vetorDireita, fnComp)

        const vetFinal = mesclar (vetorEsquerdo, vetorDireita)
        juncoes++
        //console.log ({vetFinal})
        return vetFinal
        
    }
    return vetor // Vetor de 1 elemento, não modificado
}

import {candidatos} from './includes/candidatos-2018.mjs'
comparacoes = 0, divisoes = 0, juncoes = 0
console.log ('ANTES:', candidatos)
console.time ('Ordenando candidatos...')
// Ordenando pelo nome de uma urna (NM_URNA_CANDIDATO)
// const candidatosOrd = mergeSort (candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
// Ordenação por dois níveis: primeiro por UE (SG_UF) e, dentro da UF, pelo nº do candidato (NR_CANDIDATO)
let candidatosOrd = mergeSort (candidatos, (obj1, obj2) =>{
    if (obj1.SE_UE === obj2.SG_UE) { // EMPATE DA UE
        // Desempate pelo NM_CANDIDATO
        return obj1.NR_CANDIDATO > obj2.NR_CANDIDATO
    }
    else return obj1.SR_UE > obj2.SR_UE // A diferenciação se dá por UF
})
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd ('Ordenando candidatos...')
// console.log ('DEPOIS:', candidatosOrd)
candidatosOrd.map (obj => console.log (obj))
console.log ({comparacoes, divisoes, juncoes, memoria})