export class Deque {

    #data // armazenamento
    #head // início do deque
    #tail // final do deque

    constructor () {

        this.#data = {}
        this.#head = 0
        this.#tail = -1
        // console.log(this.#data, this.#head, this.#tail)
    }

    insertFront(val) {
        this.#head--
        this.#data[this.#head] = val
        // console.log(this.#data, this.#head, this.#tail)
    }

    insertBack (val) {
        this.#tail++
        this.#data[this.#tail] = val
        // console.log(this.#data, this.#head, this.#tail)
    }

    get empty () {
        return this.#tail - this.#head + 1 === 0
    }

    removeFront () {
        // vazia retorna undefined
        if (this.empty) return undefined

        let temp = this.#data[this.#head]
        delete this.#data[this.#head]
        this.#head++
        // console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    removeBack () {
        // vazia retorna undefined
        if (this.empty) return undefined

        let temp = this.#data[this.#tail]
        delete this.#data[this.#tail]
        this.#tail--
        // console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    peekFront () {
        return this.#data[this.#head]
    }

    peekBack () {
        return this.#data[this.#tail]
    }

    print () {
        return JSON.stringify(this.#data)
    }

}