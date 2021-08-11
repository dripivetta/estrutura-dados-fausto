/*
    BUSCA BINÁRIA

    Requer um conjunto de dados ORDENADO.
    Atua dividindo o vetor sucessivamente em metades aproximadas, até que o valor de busca seja
    localizado, ou o ponteiro de fim acabe antes do ponteiro do início. Essa última situação
    indica que o valor de busca não existe no conjunto.
*/

let comparacoes

function buscaBinaria (vetor, valorBusca){
    comparacoes = 0
    let ini = 0
    let fim = vetor.length -1
    let meio
    while (fim>= ini){
        meio = Math.floor ((fim+ini) / 2) // Math.floor()arredonda para baixo
        if (vetor[meio]===valorBusca) { // achou {
            comparacoes ++
            return meio
        }
        else if (valorBusca > vetor[meio]) {
            comparacoes += 2
            ini = meio +1
        }
        else {
            comparacoes += 2
            fim = meio -1
        }
    }
    return -1 // Não existe
}

import {primos2} from './includes/troquei.mjs'
/* const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 
    71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 
    163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 
    257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 
    359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 
    461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547]
*/ 
console.time ('Buscando 317')
console.log (buscaBinaria(primos2, 317), ({comparacoes}))
console.timeEnd ('Buscando 317')
// na primeira excução demora mais porque tem o carregamento do vetor

console.time ('Buscando 509')
console.log (buscaBinaria(primos2, 509), ({comparacoes}))
console.timeEnd ('Buscando 509')

console.time ('Buscando 29')
console.log (buscaBinaria(primos2, 29), ({comparacoes}) )
console.timeEnd ('Buscando 29')

console.time ('Buscando 4')
console.log (buscaBinaria(primos2, 4), ({comparacoes}))
console.timeEnd ('Buscando 4')