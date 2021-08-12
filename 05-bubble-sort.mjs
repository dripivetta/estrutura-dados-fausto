/* 
    BUBBLE SORT

    Percorre o conjunto de daos, comparando o elemento atual com seu sucessor e promovendo
    a troca entre eles caso o primeiro seja maior que o segundo.
    Faz isso em várias passadas, até que, na útlima delas, nenhuma troca tenha
    sido registrada.
*/

let totTrocas, passada, comparacoes

function bubbleSort (vetor){
    totTrocas =0
    passada = 0
    comparacoes = 0
    let trocas
    do {
        trocas = 0 // Iniciando uma nova passada
        passada ++

        // Percorre o vetor, da primeira até a PEÚLTIMA posição
        for ( let i = 0; i <= vetor.length - 2; i++){
            if (vetor [i] > vetor [i +1]){
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

let nums = [ 7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

console.log ('Antes:', nums)
bubbleSort (nums)
console.log ('Depois:', nums)
console.log ({totTrocas, passada, comparacoes})

// Pior caso: vetor em ordem inversa
let nums2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log ('Antes:', nums2)
bubbleSort (nums2)
console.log ('Depois:', nums2)
console.log ({totTrocas, passada, comparacoes})

// Melhor caso: vetor já ordenado
let nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log ('Antes:', nums3)
bubbleSort (nums3)
console.log ('Depois:', nums3)
console.log ({totTrocas, passada, comparacoes})

// Não fiz a lista dos 100 mil nomes pois não tinha o arquivo