// Números
let a = 10, b = 8, c = 10
console.log (a > b)
console.log (a < b)
console.log (a == c)
console.log (a != c)

console.log ('--------------------------')

// String
a ='CATIFUNDA'
b ='FELISBINO'
c ='CATIFUNDA'
// ÁGATHA por ter acento, iria bem depois no alfabeto, pois na tabela ASCII os acentos vai depois
console.log (a > b)
console.log (a < b)
console.log (a == c)
console.log (a != c)
console.log ('--------------------------')

//Booleanos
a = true
b = false
c = true
console.log (a > b) // false é associado a 0 e true é associado a 1
console.log (a < b)
console.log (a == c)
console.log (a != c)
console.log ('--------------------------')

// Vetores
// Comparações diretas de vetores dão resultados inconscistentes
// Não é possível comparar diretamente dois vetores, pois ele compara endereço de memórias e não o conteúdo
a =[ 10, 20, 30, 40, 50]
b =[-3,-2,-1]
a =[10, 20, 30, 40, 50]
console.log (a > b)
console.log (a < b)
console.log (a == c)
console.log (a != c)
console.log ('--------------------------')

// Obejetos
// Obbjetos também não podem ser diretamente comparáveis entre si
a = {marca: 'Fiat', modelo: '147', ano: 1979}
b = {marca: 'Chevrolet', modelo: 'Chevette', ano: 1982}
c = {marca: 'Fiat', modelo: '147', ano: 1979}
console.log (a > b)
console.log (a < b)
console.log (a == c)
console.log (a != c)
console.log ('--------------------------')

// CONCLUSAO: apenas os seguintes tipos de dados são diretamente comparáveis entre si:
// - Number
// - String
// - Boolean

