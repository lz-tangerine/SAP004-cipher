const cipher = { 
  encode(offset, message) { 
    let encodedMessage = ""
  
    for (let i in message) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let encodeFormulaUpperCase = ((message.charCodeAt(i) - 65 + offset) % 26) + 65;
        encodedMessage += String.fromCharCode(encodeFormulaUpperCase)
      
      } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
        let encodeFormulaLowerCase = ((message.charCodeAt(i) - 97 + offset) % 26) + 97;
        encodedMessage += String.fromCharCode(encodeFormulaLowerCase);
      
      } else{
        encodedMessage += String.fromCharCode(message.charCodeAt(i))
      }
    }
  return encodedMessage;   
  },
  
  
  decode(offset, message) {
    let decodeMessage = ""
    for (let i in mensagem) {
      if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
        let criptografiaUpperCase = ((mensagem.charCodeAt(i) - 90 - chave) % 26) + 90;
        decodeMessage += String.fromCharCode(criptografiaUpperCase)
      
      } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
        let encodeFormulaLowerCase = ((message.charCodeAt(i) - 122 - offset) % 26) + 122;
        decodeMessage += String.fromCharCode(encodeFormulaLowerCase);
      
      } else{
        decodeMessage += String.fromCharCode(message.charCodeAt(i))
      }
    }
  return decodeMessage;
  }
}
export default cipher
