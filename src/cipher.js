const cipher = { 
  encode: function (chave, mensagem) { //chave de criptografia
    if (typeof mensagem !== "string") {
      throw new TypeError();
    }
    
    let mensagemCriptografada = ""
    for (let i in mensagem) {
      if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
        let criptografiaUpperCase = ((mensagem.charCodeAt(i) - 65 + chave) % 26) + 65;
        mensagemCriptografada += String.fromCharCode(criptografiaUpperCase);
      
      } else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
        let criptografiaLowerCase = ((mensagem.charCodeAt(i) - 97 + chave) % 26) + 97;
        mensagemCriptografada += String.fromCharCode(criptografiaLowerCase);
      
      } else{
        mensagemCriptografada += String.fromCharCode(mensagem.charCodeAt(i));
      }
    }
  return mensagemCriptografada;   
  },
  
  
  decode: function (chave, mensagem) {
    if (typeof mensagem !== "string") {
      throw new TypeError();
    }
    
    let decodeMessage = ""
    for (let i in mensagem) {
      if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
        let criptografiaUpperCase = ((mensagem.charCodeAt(i) - 90 - chave) % 26) + 90;
        decodeMessage += String.fromCharCode(criptografiaUpperCase)
      
      } else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
        let criptografiaLowerCase = ((mensagem.charCodeAt(i) - 122 - chave) % 26) + 122;
        decodeMessage += String.fromCharCode(criptografiaLowerCase);
      
      } else{
        decodeMessage += String.fromCharCode(mensagem.charCodeAt(i))
      }
    }
  return decodeMessage;
  }
}
export default cipher
