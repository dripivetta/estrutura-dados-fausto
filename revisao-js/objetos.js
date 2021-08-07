// Objetos são estruturas que permitem armazenar diversos valores em uma variável,
// permitindo acessá-los por meio de um nome

// Criação de um objeto vazio
let vazio1 = { } // forma "moderna"
let vazio2 = new Object () // forma "traducional"

// Criando um objeto já com dados
let pessoa = {
    // Os dados são armazenados no formato propriedade: valor
    // ou também chamdo de atributo: valor
    // Nome da propriedade pode ter espaços ou acentos, neste caso o nome da propriedade precisa estar entre aspas
    nome: 'Orkutilson de Oliveira',
    sexo: 'M',
    dataNasc: '2008-04-19',
    ocupacao: 'estudante',
    gosto: ['jogos', 'doces', 'dormir'], // Vetor em uma posição de objeto
    'cidade de origem': 'Franca/SP'
}
console.table (pessoa)

// Exibindo apenas o valor de um propriedade
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
console.log(pessoa.gosto[1])
// Quando o nome da propriedade tem espaços ou acentos, não é possível usar a sintaxe de ponto.
// É necessário usar a sintaxe de colchetes
console.log(pessoa['cidade de origem'])

// A sintaxe de colchetes SEMPRE funciona, mesmo se o nome da propriedade for uma única palavra sem acento
console.log(pessoa['nome'])
console.log(pessoa['gosto'][1]) // Mostrando só o 2º gosto

// Outra consequência da sintaxe do colchete é a possibilidade de usar nome de propriedades
// que estão dentro de variáveis

let x  ='sexo'
console.log (pessoa[x])
x = 'dataNasc'
console.log (pessoa[x])

// Criando uma nova propriedade para um objeto já existente
// Basta atribuir um valor a um nome de propriedade ainda não existente
pessoa.email ='orkutilson@gmail.com'
pessoa.celular = '(16) 98765-4321'
console.table (pessoa)

// Criando um objeto vazio e só depois adicionando propriedades
let carro = {}
carro.marca = 'Volkswagen'
carro.modelo = 'Combi'
carro.ano = 1971
carro['combustível'] = 'gasolina'
carro.cor = 'bege'

console.table (carro)

// Excluindo uma propriedade de um objeto
delete carro.ano
console.table (carro)

// Exibindo as propriedades de um objeto
// For..in determina quais as propriedades de um objeto e coloca cada delas em uma variável
// informada pelo usuário (p, neste caso) a cada interação do loop
for (let p in pessoa){
    console.log(p)
}
for (let p in carro){
    console.log(p)
}

// For..in para listar propriedades e valores de um objeto
for (atrib in pessoa){
    console.log (atrib + ' -> ' + pessoa[atrib])
}