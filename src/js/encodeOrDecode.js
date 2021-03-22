const encodeOrDecode = function (chave, mensagem, num) {
  if (typeof mensagem !== 'string') {
    throw new TypeError('message to be a string');
  }
  const logicCipher = function (string, number, modulo) {
    return ((string - (number + num) + chave) % modulo) + number + num;
  };

  let mensagemCriptografada = '';
  for (const letra in mensagem) {
    if(letra.hasOwnProperty(mensagem)) {
      mensagem = letra;
    }
    const caracter = mensagem.charCodeAt(letra);
    if (caracter >= 65 && caracter <= 90) {
      const criptografiaUpperCase = logicCipher(caracter, 65, 26);
      mensagemCriptografada += String.fromCharCode(criptografiaUpperCase);
    } else if (caracter >= 97 && caracter <= 122) {
      const criptografiaLowerCase = logicCipher(caracter, 97, 26);
      mensagemCriptografada += String.fromCharCode(criptografiaLowerCase);
    } else {
      mensagemCriptografada += String.fromCharCode(caracter);
    }
  }
  return mensagemCriptografada;
};

export default encodeOrDecode;
