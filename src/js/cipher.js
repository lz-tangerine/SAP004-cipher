import encodeOrDecode from './encodeOrDecode.js';

const encode = function(chave, mensagem) {
  return encodeOrDecode(chave, mensagem, 0);
};

const decode = function(chave, mensagem) {
  return encodeOrDecode(-chave, mensagem, 25);
};

const cipher = {
  encode,
  decode};

export default cipher;
