function finalizar(){
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let soma = 0 
        let media = 0
        let maior = valores[0]
        let menor = valores[0]
        let total = valores.length
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos]< menor)
                menor = valores[pos]
        }

        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p>`
    }
}

function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        
        res.innerHTML = 'Não foi possível a contagem, tente completar os dados !'
    
    }else{
        res.innerHTML = 'Contando <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        var p = Number(passo.value)
        
        if(p <= 0 ){
            alert('Numero de passo inválido, considerando passo = 1')
            p = 1
        }

        if(i < f){
            
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} 👉`
                //Ordem crescente
            }

        }else{

            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} 👉`
                //Ordem decrescente
            }
       
        }
        res.innerHTML += `🏁`

    }
}

function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora != 1){
        msg.innerHTML = `<p>Agora é ${hora} horas</p>`
    }else{
        msg.innerHTML = `<p>Agora é ${hora} hora</p>`
    }

    if(hora >= 0 && hora <= 5 ){
        img.src = 'images/madrugada.png'
        document.body.style.background = '#0b3e7f'
    }else if(hora >= 6 && hora <12 ){
        img.src = 'images/manha.png'
        document.body.style.background = '#dbc9c3'
    }else if(hora >= 12 && hora < 18){
        img.src = 'images/tarde.png'
        document.body.style.background = '#91b3c8'
    }else if(hora >= 18 && hora <= 23){
        img.src = 'images/noite.png'
        document.body.style.background = '#2d1d1e'
    }else if(hora >= 24){
        msg.innerHTML = `<p>A hora ${hora} é incompatível </p>`
        img.src = 'images/erro.gif'
        document.body.style.background = 'red'
    }else{
        `<p>Error</p>`
        img.src = 'images/erro.gif'
        document.body.style.background = 'red'
    }
}

function verificar(){
    document.body.style.background = '#d3d3d3'
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0){
        alert ('ERROR! Digite um valor válido!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(idade >= 0){
            if(fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade <17 ){
                    
                    img.setAttribute('src', 'images/crianca-m.png')

                }else if(idade < 50){
                    
                    img.setAttribute('src', 'images/adulto.png')

                }else {
                    
                    img.setAttribute('src', 'images/velho.png')
                }
            }else if (fsex[1].checked){
                gênero = 'Mulher'
                if(idade >= 0 && idade < 17 ){
                    
                    img.setAttribute('src', 'images/crianca-f.png')
                }else if(idade < 50){
                    
                    img.setAttribute('src', 'images/adulta.png')

                }else {
                    
                    img.setAttribute('src', 'images/velha.png')

                }
            }

            if(idade==1){
                res.innerHTML = `<p> Foi detectado ${genero} com ${idade} ano`
            }else{
                res.innerHTML = `<p> Foi detectado ${genero} com ${idade} anos`
            }
            res.appendChild(img)
            
        }else{
            alert('Digite um número valido')
        }
            
        
    }
}


function tabuada(){
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if(num.value.length == 0 ){
        
        alert('Insira um número!')
        tab.innerHTML = ('<option> Digite um </option>' + '<option> número acima!</option>')
        document.getElementById('seltab').size="2"

    }else{
     
        let n = Number(num.value)
        let c = 1
        document.querySelector('#seltab').size = "10"
        tab.innerHTML = ''
        
        for(let c = 1; c <= 10; c++){
        
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        
        }
    }
}


function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l ) {  
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#result')
let valores = []

function adicionar() {
    if(isNumero(num.value) && ! inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement ('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor invalido ou já foi encontrado na lista')
    }
    num.value = ''
    num.focus()
}

