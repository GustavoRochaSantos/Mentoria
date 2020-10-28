/*
    forEach- Percorre todos os registros
    Map - Percorrer todos os registros e permite altera-los
    filter - Filtrar com uma condição e retornar o conjunto de dados 
    reduce - objeto acumulado ()
*/
/*
const produtos = ['banana', 'maca', 'pera']
produtos.forEach(item => { 
    console.log(item)
} )

const produtos2 = produtos.map(item => {
    return item + ' - alterado'
})
console.log(produtos2)

const listaFilmes = [
    {
        nome: 'O vento levou',
        ano: 1940
    },
    {
        nome: 'Matrix',
        ano: 2010
    },
    {
        nome: 'Riddick',
        ano: 2010
    },
]
const listaFilmesFiltrada = listaFilmes.filter(item => item.ano === 2222)
console.log(listaFilmesFiltrada)

const notas = [7, 8, 4, 10]
const totalNotas = notas.reduce((total, item)=>{
    return total + item
}, 0)
console.log(totalNotas)

const nomes = ['gustavo', 'rocha', 'dos', 'santos']
const nomeCompleto = nomes.reduce((acumulado, item)=> acumulado + ' ' + item, '')
console.log(nomeCompleto)










function soma(x, y){
    let somatotal = x + y

    return somatotal
}
const total = soma(3,4)
console.log(total)


const subtracao = function(x, y){
    return x-y
}
const resultadoSubtracao = subtracao(10,4)
console.log(resultadoSubtracao)

//Arrow function
const multiplicacao = (x, y) => x * y // (parametros) => {} // (parametros) => valorRetorno
console.log(multiplicacao(2,5))
*/


const soma = (x, y) => x + y

const multiplicaASoma = (x, y, z, soma)=> {
    const total = soma(x, y) * z
    return total
}


console.log(multiplicaASoma(2,5,8))