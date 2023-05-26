//Crie a const para a frase aqui
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'


const string = frase.replace("verde", "rosa")

const novaString = string.replace("azul", "laranja")


console.log(novaString)

console.log(novaString.includes('verde'))
console.log(novaString.includes('laranja'))

