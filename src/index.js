import cipher from './cipher.js';

let user = localStorage.getItem("user")
document.getElementById("user").innerHTML = `B3M V1ND0 ${user}`

const botaoEncode = document.getElementById("botaoEncode")
const botaoDecode = document.getElementById("botaoDecode")

function encode (){
    event.preventDefault()
    const mensagem = document.getElementById("mensagem").value
    const chave = Number(document.getElementById("offset").value)
    document.getElementById("mensagemCriptografada").innerHTML = cipher.encode(chave, mensagem)
}

function decode (){
    event.preventDefault()
    const mensagem = document.getElementById("mensagem").value
    const chave = Number(document.getElementById("offset").value)
    document.getElementById("mensagemCriptografada").innerHTML = cipher.decode(chave, mensagem)
}


botaoEncode.addEventListener("click", encode)
botaoDecode.addEventListener("click", decode)

// console.log(cipher);
