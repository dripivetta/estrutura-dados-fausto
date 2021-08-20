let trocas, comparacoes, passadas

function quickSort (vetor, fnComp, ini=0, fim = vetor.length -1) {
    if (fim > ini){ // Condição da saída das chamadas recursivas
        passadas++
        const pivot = fim
        let div = ini -1
        // Loop for vai até a PENÚLTIMA posição
        for (let i = ini; i < fim; i++){
            if (fnComp(vetor[pivot], vetor[i])){ // Parâmetros invertidos (em relação ao arquivo 11)
                comparacoes++
                div ++ 
                if ( i !== div ){
                    [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
                    trocas++
                }
            }
        }
        div ++
        // Colocando o pivô no seu lugar definitivo
        if (fnComp(vetor[i], vetor[pivot])) { // Parâmeteros invertidos (em relação ao arquivo 11)
            [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
            trocas++
        }
        comparacoes++
        // Ordena o subvetor à esquerda do pivô
        quickSort (vetor, fnComp, ini, div-1)
        // Ordena o subvetor à direita do pivô
        quickSort (vetor, fnComp, div+1, fim)
    }
}

import {candidatos} from './includes/candidatos-20218.mjs'
trocas = 0, passadas = 0, comparacoes =0
console.time ('Ordenando candidatos')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
// quickSort (candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
// Ordenação de 3 itens do objeto
// 1) Ordenação por SG_UE
// 2) Ordenação por DS_CARGO
// 3) Ordanação por NR_CANDIDATO

// Para filtrar por exemplo todos de SP primeiro
const candidatosSP = candidatos.filter (obj => obj.SG_UE === 'SP')

quickSort (candidatos,(a, b) => { // tem que colocar candidatosSP se for usar o filter
    if (a.SG_UE === b.SG_UE) { // empate da UF
        // Empate no cargo, desempate no número do candidato
        if (a.DS_CARGO == b.DS_CARGO) return a.NR_CANDIDATO > b.NR_CANDIDATO
        // UF igual, cargos diferentes, diferencia por cargo
        else return a.DS_CARGO > b.DS_CARGO // para colocar em ordem decrescente colocar sinal de <
    }
    // UF diferente, diferencia por UF
    else return a.SG_UE > b.SG_UE // para colocar em ordem decrescente colocar sinal de <
})

let memoria = process.memoryUsage().heapUsed /1024 / 1024
console.timeEnd ('Ordenando candidatos...')
console.log ('DEPOIS:', candidatos) // para exibir os candidatos do filtro colocar candidatosSP
console.log({trocas, passadas,comparacoes, memoria})