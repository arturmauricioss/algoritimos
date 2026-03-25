let ul = document.querySelector("ul")
let input = document.querySelector("input")
let lista = []
let buscando = false
let timeouts = []


function gerar_lista(){
    let looping = Number(input.value)
    if (looping<1||isNaN(looping)){
        alert("Insira quantos numeros randomicos deseja gerar")    
    } else if (looping>=1){
        for (let i = 0; i< looping; i++){
            let li = document.createElement("li")
            li.innerText = Math.floor(Math.random() * 201) - 100
            lista.push(li.innerText)
            ul.appendChild(li)    
        }
    }   console.log(lista)
    
}

function adicionar_na_lista(){
    if (input.value===""||isNaN === input.value){
        alert("Ta de brincadeira?")    
    } else{
    let numero = input.value
    lista.push(numero) 
    console.log(lista)
    let li = document.createElement("li")
    li.innerText = numero
    ul.appendChild(li)
    }
}
function remover_da_lista(){
    if (input.value===""||isNaN === input.value){
        alert("Ta de brincadeira?")    
    } else{
        let numero = Number(input.value)
        for (let i=lista.length-1; i>=0;i--){
            if(numero==lista[i]){
                lista.splice(i,1)
                ul.removeChild(ul.childNodes[i])
            }
        }
    }
}

function limpar_lista(){
    lista=[]
    ul.innerHTML=""
}
function pararBusca(){
    timeouts.forEach(t => clearTimeout(t))
    buscando = false
}
function pesquisa_linear(){
    if (input.value===""||isNaN === input.value){
        alert("Ta de brincadeira?")    
    } else{

        if (buscando){
            pararBusca()
        }
        if (input.value === "" || isNaN(input.value)){
        alert("Ta de brincadeira?")
        return
    }

    buscando = true

    let valor = Number(input.value)
    let itens = ul.querySelectorAll("li")

    // limpa cores anteriores
    itens.forEach(li => {
        li.style.backgroundColor = ""
    })

    timeouts = []

    for (let i = 0; i < itens.length; i++){
        let timeout = setTimeout(() => {

            // reset leve (opcional)
            itens.forEach(li => {
                if (li.style.backgroundColor !== "green") {
                    li.style.backgroundColor = ""
                }
            })

            // destaca atual
            itens[i].style.backgroundColor = "yellow"

            // verifica
            let encontrou = Number(itens[i].innerText) === valor

            if (encontrou){
                itens[i].style.backgroundColor = "green"
            }

            // terminou
            if (i === itens.length - 1){
                // se NÃO encontrou, remove o amarelo do último
                if (!encontrou){
                    itens[i].style.backgroundColor = ""
                }
                buscando = false
            }

        }, i * 200) // velocidade aqui

        timeouts.push(timeout)
    }

}}
