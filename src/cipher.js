const cipher = {
  encode,
  decode
};

function encodeOrDecode(chave, mensagem, num) {
  if (typeof mensagem !== "string") {
    throw new TypeError("message to be a string");
  }

  let mensagemCriptografada = ""
  for (let letra in mensagem) {
    let caracter = mensagem.charCodeAt(letra)
    if (caracter >= 65 && caracter <= 90) {
      let criptografiaUpperCase = ((caracter - (65 + num) + chave) % 26) + 65 + num;
      mensagemCriptografada += String.fromCharCode(criptografiaUpperCase);

    } else if (caracter >= 97 && caracter <= 122) {
      let criptografiaLowerCase = ((caracter - (97 + num) + chave) % 26) + 97 + num;
      mensagemCriptografada += String.fromCharCode(criptografiaLowerCase);

    } else {
      mensagemCriptografada += String.fromCharCode(caracter);
    }
  }
  return mensagemCriptografada;
}

function encode(chave, mensagem) {
  return encodeOrDecode(chave, mensagem, 0)
}

function decode(chave, mensagem) {
  return encodeOrDecode(-chave, mensagem, 25)
}

export default cipher
