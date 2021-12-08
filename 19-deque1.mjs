import { Deque } from './lib/Deque.mjs'
import { Deque as Deque2 } from './lib/Deque.mjs' // não pode colocar dois import com mesmo nome, ai renomeia um

let deque = new Deque()

deque.insertBack ('Margarida')
deque.insertBack ('Pateta')
deque.insertBack ('Gastão')
deque.insertBack ('Donald')

console.log(deque.print())

deque.insertFront ('Tio Patinhas')
console.log (deque.print())

deque.insertFront ('Minnie')
console.log (deque.print())

let primeiro = deque.peekFront ()
let ultimo = deque.peekBack ()
console.log({primeiro, ultimo})
console.log (deque.print ())

let atendido = deque.removeFront ()
console.log({atendido})
console.log(deque.print ())

let desistente = deque.removeBack ()
console.log({desistente})
console.log(deque.print ())

deque.insertBack('Mikey')
console.log(deque.print ())