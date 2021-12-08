export class Queue {

    #data
    #head // controla o início da fila
    #tail // controla o final da fila

    constructor () {
        this.#data = {}
        this.#head = 0 // início da fila 
        this.#tail = -1 // final da fila
        //console.log(this.#data, this.#head, this.#tail)
    }

    enqueue (val) {
        this.#tail++
        this.#data[this.#tail] = val
        //console.log(this.#data, this.#head, this.#tail)
    }

    dequeue () {

        // Se a fila estiver vazia, retorna undefined para não afetar o posicionamento de #head
        if(this.empty) return undefined

        let temp = this.#data[this.#head] // Salva o elemento no início da fila
        delete this.#data[this.#head] // Apaga o elemento no início da fila
        this.#head++ // Chega o início da fila para frente
        //console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    peek () {
        return this.#data[this.#head]
    }

    get empty () { // fila vazia 
        return this.#tail - this.#head + 1 === 0
    }

    print () {
        return JSON.stringify(this.#data)
    }

}