import { Stack } from './lib/Stack.mjs'

let analisador = new Stack()      // Cria uma pilha

let expr = '3 * { 5 - 2 / [3 * 4 + (12 / 5)]}'
// let expr = '8 - {5 * (3 + 7)}'

let info

for (let i = 0; i < expr.length; i++){
    switch(expr.charAt(i)){
        case '{':
            analisador.push({tipo: 'CH', pos: i})
            console.log(analisador.print())
            break
        case '[':
            analisador.push({tipo: 'CO', pos: i})
            console.log(analisador.print())
            break
        case '(':
            analisador.push({tipo: 'PA', pos: i})
            console.log(analisador.print())
            break
        case '}':
            info = analisador.pop ()
            if(info && info.tipo == 'CH') { // Se retornou dados
                console.log(`Chave aberta na posição ${info.pos} e fechada na posição ${i}`)
            }
            else {
                console.log(`ERRO: chave fechada na posição ${i} não tem abertura correspondente`)
            }
            break
        case ']':
            info = analisador.pop ()
            if(info && info.tipo == 'CO') { // Se retornou dados
                console.log(`Colchete aberto na posição ${info.pos} e fechado na posição ${i}`)
            }
            else {
                console.log(`ERRO: colchete fechado na posição ${i} não tem abertura correspondente`)
            }
            break
        case ')':
            info = analisador.pop ()
            if(info && info.tipo == 'PA') { // Se retornou dados
                console.log(`Parênteses aberto na posição ${info.pos} e fechado na posição ${i}`)
            }
            else {
                console.log(`ERRO: parênteses fechado na posição ${i} não tem abertura correspondente`)
            }
            break

    }
}

console.log('PILHA FINAL: ', analisador.print ())

if (! analisador.empty) {
    while(! analisador.empty){
        info = analisador.pop ()
        switch(info.tipo) {
            case 'PA':
                console.log(`ERRO: Parênteses aberto na posição ${info.pos} não tem fechamento correspondente`)
                break
            case 'CO':
                console.log(`ERRO: Colchete aberto na posição ${info.pos} não tem fechamento correspondente`)
                break
            case 'CH':
                console.log(`ERRO: Chave aberta na posição ${info.pos} não tem fechamento`)
                break

        }
    }
}