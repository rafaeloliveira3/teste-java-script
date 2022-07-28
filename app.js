'use strict'

function juntarNome (){
    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const resultado = document.getElementById('resultado')
    
    const nomeCompleto = `Seu nome completo é: ${nome} ${sobrenome}`
    
    if(nome == '' || sobrenome == ''){
        resultado.textContent = 'Os campos acima devem ser preenchidos'
    }
    else{
        resultado.textContent = nomeCompleto
    }
}
document.getElementById('juntar').addEventListener('click', juntarNome)