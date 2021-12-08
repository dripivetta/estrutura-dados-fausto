/*
    ESTRUTURA DE DADOS FILA

    - Fila é uma lista linear de acesso restrito, que permite apenas as operações
    de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo no final da estrutura 
    e a segunda no início da estrutura.
    - Como consequência, a filha funciona pelo princípio FIFO (First In, First Out)
    primeiro a entrar, primeiro a sair.
    - A principal aplicação das filas são tarefas que envolvam o processamento de tarefas
    por ordem de chegada.

*/

export class Queue {

    #data

    constructor () {
        this.#data = [] // Vetor vazio
    }

    // Inserção na fila (enfileiramento)
    enqueue (val) {
        this.#data.push(val)
    }

    // Remoção da fila (desenfileiramento)
    dequeue () {
        return this.#data.shift()
    }

    // "Espiadinha" (no início) retorna o valor que é o primeiro valor inserirdo - começo da fila
    peek () {
        return this.#data[0]
    }

    // retorna se a fila esta vazia 
    get empty () {
        return this.#data.length === 0
    }

    print (){
        return JSON.stringify(this.#data)
    }
}