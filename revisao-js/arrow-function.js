// Função que eleva o número ao quadrado
// Se precisar de uma situaçao real, use Math.pow () ou o operador **
function quadrado (n){
    return n*n
}
console.log (quadrado(9))

// Característica da função acima:
// 1) Apenas um parâmetro
// 2) Apenas uma linha de código, com return
// 3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION 

// Transformando em arrow function
// a) Não precisa de parênteses envolvendo o parâmetro
// b) A palabra function é substituída pelo sinal de =>, DEPOIS do parâmetro
// c) Não são necessárias as chaves nem a palavra return
const quadrado2 = n => n*n
console.log (quadrado(9))

// Função que tem mais de um parâmetro 
function potencia (b, e){ // b= base, e= expoente
    return b**e
}
console.log (potencia (2,8))

// Função equivalente no formato arrow function
let potencia2 = (b, e) => b**e
// Quando tempos mais de um parâmetro, os parênteses em volta dos parâmetros em volta dos argumentos
//voltam a ser obrigratório
console.log (potencia(2,8))

// Função sem argumento/parâmetro
function megaSena (){
    // Esta função retorna um número aleatório entre 1 e 60
    // Math.random () -> retorna um número aleatório entre 0 (inclusive) e 1 (exclusive)
    // * 60 -> ajusta a faixa de valores entre 0 e 59
    // + 1 ajusta a faixa de valores para entre 1 e 60
    // Math.floor -> arredondar para o menor número inteiro (tira as casas decimais)
    return Math.floor(Math.random () * 60 + 1)
}
console.log (megaSena(), megaSena())

// Função equivalente no formato arrow function
// Quando a função não tem argumentos, na arrow function é necessário deixar um par de parênteses vazios
// para marcar seu lugar
const megaSena2 = () => Math.floor(Math.random() * 60 + 1)
console.log (megaSena2 (), megaSena2 () )

// Função com mais de uma linha de código no corpo
function somaVetor (vet){
    let soma = 0
    for (let n of vet) soma+= n
    return soma
}
console.log (somaVetor([12,42,-11,20,9,16]))

// Função equivalente no formato arrow function
// Quando a função tem mais de uma linha de código, na arrow function equivalente 
// retornam as chaves e também a palavra return, caso ela retorne valor
const somaVetor2 = vet => {
    let soma = 0
    for (let n of vet) soma+= n
    return soma
}
console.log (somaVetor([12,42,-11,20,9,16]))

// CONCLUSÃO: arrow function foram concebidas para facilitar a escrita de função de apenas
// uma linha, embora também possam ser usadas para funções de múltiplas linhas.