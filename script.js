const botoes = document.querySelectorAll('button')
const visorPrincipal = document.querySelector('.visor-calculadora')
const visorSecundario = document.querySelector('.visor-content')

let bloco1 = 0
let bloco2 = 0
let chave = 0;
function iniciar(e){
   const valor = +e.target.innerText

    if(!isNaN(valor)){
        visorPrincipal.innerText += valor;
        
        
    } 

    switch(e.target.innerText){
        case '*':
            blocoseChave('*')
            break

        case '/':
            blocoseChave('/')
            break

        case '-':
            blocoseChave('-')
            break
        
        case '+':
            blocoseChave('+')
            break

        case 'C':
            limpar()
            break

        case '=':
            bloco2 = visorPrincipal.innerText  
            fazerConta()
            break
    }

    function limpar(){
        bloco1 = 0
        bloco2 = 0
        chave = ''
        visorPrincipal.innerText = ''
        visorSecundario.innerText = ''
    }


   function fazerConta(){
    let resultado;
    switch(chave){
        case '*':
            resultado = bloco1 * bloco2
            visorPrincipal.innerText = Math.floor(resultado)
            continuarConta(resultado)
            break;

        case '/':
            resultado = bloco1 / bloco2
            visorPrincipal.innerText = Math.floor(resultado)
            continuarConta(resultado)
            break

        case '-':
            resultado = bloco1 - bloco2
            visorPrincipal.innerText = Math.floor(resultado)
            continuarConta(resultado)
            break
        
        case '+':
            resultado = +bloco1 + +bloco2
            visorPrincipal.innerText = Math.floor(resultado)
            continuarConta(resultado)
            break

    }
   }

    function blocoseChave(elemento){
            chave = elemento 
            if (bloco1 == 0){
                bloco1 = visorPrincipal.innerText
            } 

            visorSecundario.innerText = visorPrincipal.innerText;
            visorPrincipal.innerText = ''   
        
    }

    function continuarConta(resultado){
        visorPrincipal.innerText = resultado
            visorSecundario.innerText = ''
            bloco1 = resultado
            bloco2 = 0;
    }
}

botoes.forEach(e =>{
    e.addEventListener('click', iniciar)
})



