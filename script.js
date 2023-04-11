const botoes = document.querySelectorAll('button')
const visorPrincipal = document.querySelector('.visor-calculadora')

let bloco1 = 0
let bloco2;

function iniciar(e){
   const valor = +e.target.innerText

    if(!isNaN(valor)){
        visorPrincipal.innerText += valor;
    } 

    switch(e.target.innerText){
        case '*':
            bloco1 = visorPrincipal.innerText
            console.log(bloco1)
            break

        case '/':
            console.log('dividir')
            break

        case '-':
            console.log('subtrair')
            break
        
        case '+':
            console.log('somar')
            break

        case 'C':
            console.log('limpar')
            break

        case '=':
            console.log('igual')
            break
    }


    function fazerConta(elemento){
        
        
    }
}

botoes.forEach(e =>{
    e.addEventListener('click', iniciar)
})

