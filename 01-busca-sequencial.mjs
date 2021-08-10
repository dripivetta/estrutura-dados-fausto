/*
    BUSCA SEQUENCIAL

    - Percorre linearmente um vetor, a partir da primeira posição, procurando pelo valor de busca.
    Caso o encontre, retorna a posição em que o valor de busca foi encontrado.

    - Caso, percorrido todo o vetor e não encontrado o valor de busca, retorna o valor convencional -1,
    para indicar a respectiva inexsistência.

*/

function buscaSequencial (vetor, valorBusca){
    for (let i = 0; i <vetor.length; i++){
        if (vetor[i] === valorBusca) return i // Retorna a posição onde foi encontrado
    }
    return -1 // Valor de busca não encontrado
}

const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 
    71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 
    163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 
    257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 
    359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 
    461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547]

console.time ('Buscando 317')
console.log (buscaSequencial(primos, 317))
console.timeEnd ('Buscando 317')
// na primeira excução demora mais porque tem o carregamento do vetor

console.time ('Buscando 509')
console.log (buscaSequencial(primos, 509))
console.timeEnd ('Buscando 509')

console.time ('Buscando 29')
console.log (buscaSequencial(primos, 29))
console.timeEnd ('Buscando 29')

console.time ('Buscando 4')
console.log (buscaSequencial(primos, 4))
console.timeEnd ('Buscando 4')

import { primos2 } from './includes/troquei.mjs'
console.time ('Buscando 547')
console.log (buscaSequencial(primos2, 547) >=0) // se colocar > ou = a 0 volta true ou fase
console.timeEnd ('Buscando 547')