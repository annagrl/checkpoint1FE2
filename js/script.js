

function inserirLista() {

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;
    let imagem = document.getElementById('imagem').value;
   let ensaios = document.querySelectorAll('input[type=\'radio\']');
    let termos = document.querySelector('input[type=\'checkbox\']');
    let cards = document.getElementById('cards');

    let img = document.createElement('img');
    img.setAttribute('src', imagem);
    img.setAttribute('id', 'cardImagem');
    cards.appendChild(img);

    let ensaio;
    for (let i = 0; i < ensaios.length; i++) {
        if (ensaios[i].checked) {
            ensaio = ensaios[i].value;
            break;
        }

    }

    let infoTermo; termos.checked ? infoTermo = "Aceito Termos" : infoTermo = "Não aceito";

    let card = document.createElement('h4');
    card.innerText = `Nome: ${nome} 
    Sobrenome: ${sobrenome}. 
    Tipo de ensaio: ${ensaio}. 
    Termo: ${infoTermo}`;

    cards.appendChild(card);

}

let botao = document.getElementById("btn");

botao.addEventListener('click', inserirLista); 


