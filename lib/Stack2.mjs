export class Stack {

    #data
    #tail // Cauda, fim da estrutura (top)

    constructor () {
        this.#data = {} // objeto vazio
        this.#tail = -1 // posição - 1 = pilha vazia
        // console.log(this.#data, this.#tail)
    }

    push (val) {
        this.#tail++ 
        this.#data[this.#tail] = val
        //console.log(this.#data, this.#tail)
    }

    pop () {

        // Se a pilha estiver vazia, já retorna undefined no início para evitar que #tail caia abaixo de -1
        if (this.empty) return undefined

        let temp = this.#data[this.#tail]
        delete this.#data[this.#tail]
        this.#tail --
        //console.log(this.#data, this.#tail)
        return temp
    }

    peek () {
        return this.#data[this.#tail]
    }

    get empty () {
        return this.#tail === -1
    }

    print () {
        return JSON.stringify(this.#data)
    }
}