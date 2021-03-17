const encodeOrDecode = function (chave, mensagem, num) {
  if (typeof mensagem !== 'string') {
    throw new TypeError('message to be a string');
  }
  let mensagemCriptografada = '';
  for (const letra in mensagem) {
    if(letra.hasOwnProperty(mensagem)) {
      mensagem = letra;
    }
    const caracter = mensagem.charCodeAt(letra);
    if (caracter >= 65 && caracter <= 90) {
      const criptografiaUpperCase = ((caracter - (65 + num) + chave) % 26) + 65 + num;
      mensagemCriptografada += String.fromCharCode(criptografiaUpperCase);
    } else if (caracter >= 97 && caracter <= 122) {
      const criptografiaLowerCase = ((caracter - (97 + num) + chave) % 26) + 97 + num;
      mensagemCriptografada += String.fromCharCode(criptografiaLowerCase);
    } else {
      mensagemCriptografada += String.fromCharCode(caracter);
    }
  }
  return mensagemCriptografada;
};

export default encodeOrDecode;
