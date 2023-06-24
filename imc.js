const calcular = document.getElementById('calcular');

/* esta funçao executa os valores informados na caixa de texto */

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
 /* Nesse código ele verifica se os campos estao preenchidos */

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso normal. !';
        }else if (valorIMC > 30){
            classificacao = ' acima do peso.';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

/* evento executa todo conteudo do html informado pelo usuario */
calcular.addEventListener('click', imc);