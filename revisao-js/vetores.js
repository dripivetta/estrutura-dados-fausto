let frutas = ['maçã', 'laranja', 'pera', 'uva', 'mamão', 'banana']

// Vetor original
console.log(frutas)

// Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop()

// Valor alterado
console.log(frutas)
console.log(ultimaFruta)

// Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift ()
console.log(frutas)
console.log(primeiraFruta)


// Remoção de posição intermediária
//1º parâmetro -> a posição da remoção (contagem começa no 0)
//2º parâmetro -> a quantidade de elementos a remover
let terceiraFruta = frutas.splice (2, 1) // o SPLICE sempre retornará um vetor 
console.log(frutas)
console.log(terceiraFruta)

// Inserindo elementos no final do vetor
frutas.push ('amora') // Pode inserir mais de um elemento ao mesmo tempo ('amora', 'jaca')
console.log(frutas)

// Inserindo elemento no inicio do vetor
frutas.unshift ('jabuticaba') // Também pode inserir mais de um elemento ao mesmo tempo
console.log (frutas)

// Inserindo elementos no meio do vetor
// 1º parâmetro -> a posição da inserção (contagem começa no 0)
// 2º parâmetro -> número de elementos a serem excluídos para inserção (para inserção usa-se 0)
// 3º parâmetro -> elementos que serão incluídos 
frutas.splice (2, 0, 'pêssego')
console.log (frutas)

// Substituindo um elemento no velor usando splice ()
// 1º parâmetro -> a posição para substituição (contagem começa no 0)
// 2º parâmetro -> quantidade de elementos que serão excluídos (para substituição, usa-se 1) 
// 3º o elemento que será incluido no lugar
frutas.splice (4, 1, 'ameixa')
console.log (frutas)

// Insereção múltiplas com splice ()
frutas.splice (1, 0, 'nectarina', 'jaca')
console.table (frutas)

console.log ('--------------------------------')
// Percurso de vetores
// 1) Percurso com for tradicional
// a)A contagem começa em 0  (0 é o primeiro elemento)
// b) Ocorre enquanto o contador for MENOR que o número de elementos do vetor 
// c) length termina com TH 
// d) É o método mais flexível pois, se necessário é possível fazer um percurso parcial 
// (começa em algum elemento que não é o primeiro e não termina antes do do final)
for (let i = 0 ; i<frutas.length; i++){
    console.log(i, frutas[i])
}
console.log ('------------------------------')
// 2) For tradiconal em ordem inversa
// a) O contador inicia-se em length - 1
// b) A condição é o contador MAIOR OU IGUAL A zero (0 é o primeiro elemento)
for (let i = frutas.length -1; i>= 0; i--){
    console.log (i, frutas[i])
}
console.log ('------------------------------')

// 3) Percurso com for..of 
// a) sempre percorre o vetor inteiro na ordem natural, sem necessidade de uma variável contadora
// b) Variáveis:
// f -> variável que receberá cada elemento do vetor (qualquer nome de variável válido)
// frutas -> o vetor a ser percorrido 
for (let f of frutas){
    console.log (f)
}
console.log ('------------------------------')

// 4) Percurso com forEach ()
// forEach () recebe como parâmetro uma função que recebe como parâmetro cada elemento do vetor
// O nome do parâmetro da função pode ser qualquer nome válido de identificador
frutas.forEach (function(elemento){
    console.log(elemento)
})
console.log ('------------------------------')

// O mesmo forEach () usando uma arrow function como parâmetro 
frutas.forEach (elemento => console.log (elemento))
console.log ('------------------------------')