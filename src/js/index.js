import cipher from './cipher.js';

const botaoEncode = document.getElementById('botaoEncode');
const botaoDecode = document.getElementById('botaoDecode');

const encode = function (event){
    event.preventDefault();
    const mensagem = document.getElementById('mensagem').value;
    const chave = Number(document.getElementById('offset').value);
    document.getElementById('mensagemCriptografada').innerHTML = cipher.encode(chave, mensagem);
};

const decode = function(event){
    event.preventDefault();
    const mensagem = document.getElementById('mensagem').value;
    const chave = Number(document.getElementById('offset').value);
    document.getElementById('mensagemCriptografada').innerHTML = cipher.decode(chave, mensagem);
};

botaoEncode.addEventListener('click', encode);
botaoDecode.addEventListener('click', decode);
