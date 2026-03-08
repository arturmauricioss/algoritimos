var lista = [8,18,95,47,98,13,21,35,54,9684,95,58,18,17,48,28,298,2187,2,89,9,47,18,589,59,59,781,32,9,4584,9845,841,7165,9877]
// var lista = [2,4,6,8,10,12,15,19,22,25,29,35,37,41,49,53,57,62,68,75]
var lista_original = document.querySelector('#lista_original')
var input = document.querySelector('input')
var resultados = document.querySelector('#resultados')

lista.forEach(function(numero){
    let li = document.createElement("li")
    li.textContent = numero
    lista_original.appendChild(li)

})
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function pesquisa_linear(lista){
    
    resultados.innerHTML=""
    let valor = Number(input.value)

    for (let index = 0; index < lista.length; index++) {
        let element = lista[index]
        let li = document.createElement("li")
        li.textContent = `Verificando o item no indice ${index} da lista`

        resultados.appendChild(li)

        li.classList.add("analisando")

        await sleep(3000)
        
        if (element === valor){
            li.textContent = `Encontramos o resultado aqui no indice ${index}`
            li.classList.remove("analisando")
            li.classList.add("encontrado")
            break
        }
        else{
            li.textContent = " Não está aqui"
            li.classList.remove("analisando")
        }
    }

}