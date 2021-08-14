/*
    MERGE SORT

    No processo de ordenação, esse algoritimo "desmonta" o vetor original contendo N elementos
    até obter N vetores de apenas um elemento cada um.
    Em seguida, usando técnicas de mesclagem(merge), "remonta" o vetor, dessa vez com os elementos já em ordem.
*/

function mergeSort (vetor) {

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

        console.log({vetorEsquerdo, vetorDireita})

        // Chamada recursiva à função (chamar a função dentro da função)
        vetorEsquerdo = mergeSort (vetorEsquerdo)
        vetorDireita = mergeSort (vetorDireita)

        const vetFinal = mesclar (vetorEsquerdo, vetorDireita)
        console.log ({vetFinal})
        return vetFinal
        
    }
    return vetor // Vetor de 1 elemento, não modificado
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
let numsOrd  =  mergeSort (nums)
console.log ({numsOrd})