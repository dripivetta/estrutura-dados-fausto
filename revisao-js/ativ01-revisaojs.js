/* 
    DADOS PARA O EXERCÍCIO

    Nome; sigla; area; populacao
    Sergipe; SE; 21915.08; 2278308
    Alagoas; AL; 27848.14; 3322820
    Rio Grande do Norte; RN; 52811.05; 3479010
    Paraíba; PB; 56469.78; 39966496
    Pernambuco; PE; 98148.32; 9496294
    Ceará; CE; 148920.47; 9075649
    Piauí; PI; 251577.74; 3264531
    Maranhão; MA; 331937.45; 7035055
    Bahia; BA; 56733.18; 14812617
*/

let estadosNe = []

let estado1 = {
    nome: 'Sergipe',
    sigla: 'SE',
    area: 21915.08,
    populacao: 2278308
}

estadosNe.push (estado1)

/*
    1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os ao vetor estadosNe
        usando  push ().
*/

let estado2 = {
    nome: 'Alagoas',
    sigla: 'AL',
    area: 27848.14,
    populacao: 3322820
}
estadosNe.push (estado2)

let estado3 = {
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    area: 52811.05,
    populacao: 3479010
}
estadosNe.push (estado3)

let estado4 = {
    nome: 'Paraíba',
    sigla: 'PB',
    area: 56469.78,
    populacao: 39966496
}
estadosNe.push (estado4)

let estado5 = {
    nome: 'Pernambuco',
    sigla: 'PE',
    area: 98148.32,
    populacao: 9496294
}
estadosNe.push (estado5)

let estado6 = {
    nome: 'Ceará',
    sigla: 'CE',
    area: 148920.47,
    populacao: 9075649
}
estadosNe.push (estado6)

let estado7 = {
    nome: 'Piauí',
    sigla: 'PI',
    area: 251577.74,
    populacao: 3264531
}
estadosNe.push (estado7)

let estado8 = {
    nome: 'Maranhão',
    sigla: 'MA',
    area: 331937.45,
    populacao: 7035055
}
estadosNe.push (estado8)

let estado9 = {
    nome: 'Bahia',
    sigla: 'BA',
    area: 56733.18,
    populacao: 14812617 
}
estadosNe.push (estado9)
console.log (estadosNe)

/* 
    2) Escreva uma arrow function que receba dois parâmetros, área e população, e calcule a densidade demográfica
        retornando o resultado da divisão da segunda pela primeira.
*/

let densidade = (area, populacao) => populacao / area

/* 
    3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado, chame uma arrow function criada
        em 2) e efetue o cálculo correspondente. Com o resultado do cálculo, crie uma propriedade chamada
        'densidade demográfica' para cada objeto representando um Estado.
        Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.
*/
for (let i = 0; i < estadosNe.length; i++){
    estadosNe[i]['Densidade demográfica'] = densidade (estadosNe[i].area, estadosNe[i].populacao)
    delete estadosNe[i].sigla
}

/* 
    4) Escreva uma arrow function que receba um objeto. Na função, use for..in para extrair as propriedades
        e seus valores e exibi-los com console.log ().
*/
let arrow2 = (objeto) => {
    for (propriedades in objeto) { 
    console.log (propriedades + ' -> ' + objeto[propriedades])
    }
}

/* 
    5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor, invoque a função escrita
        em 4) para exibi-lo.
*/
for (let i of estadosNe){
    arrow2(i)
}

/*
    6) 
    a) Declare um vetor vazio
*/
let vazio = []

/*
    b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme os dados no topo deste arquivo,
    um de cada vez. Faça as inserções de modo que o vetor final esteja em ordem alfabética. No caso, o primeiro
    Estado (Sergipe), pode ser inserido com push (), mas o segundo (Alagoas) deve ser inserido com unshift (),
    para manter a ordem alfabética o terceiro estado (Rio Grande do Norte) deve ser inserido entre os dois
    já existentes, e assim por diantes.
*/
vazio.push (estadosNe[0].nome)
vazio.unshift (estadosNe[1].nome)
vazio.splice (1, 0, estadosNe[2].nome)
vazio.splice (2, 0, estadosNe[3].nome)
vazio.splice (3, 0, estadosNe[4].nome)
vazio.splice (4, 0, estadosNe[5].nome)
vazio.splice (5, 0, estadosNe[6].nome)
vazio.splice (6, 0, estadosNe[7].nome)
vazio.splice (7, 0, estadosNe[8].nome)