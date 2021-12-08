const texto = 'Socorram-me, subi no ônibus em Marrocos'

const pilha = []

// Empilhamento
for (let i=0; i < texto.length; i++) {
    pilha.push (texto.charAt(i))
}


// Inserindo alguns caracteres no MEIO da pilha (PROIBIDO!)

console.log(pilha)

pilha.splice(16, 0, 'b', 'a', 't', 'a', 't', 'a')

let textoRev = ''

// Desempilhando
while(pilha.length){ // 0 é avalidado false; qq coisa !==0 é avalidado como true
    textoRev += pilha.pop()
}
console.log(textoRev)