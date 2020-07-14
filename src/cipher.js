const cipher = {
  encode: (offset, string) => {
    let letras = string.toUpperCase();
    let desloc = Number(offset);
    let encoded = '';
    for (let i = 0; i < string.length; i++) {
      let frase = letras.charCodeAt(i);
      let formula = (((frase - 65) + desloc) % 26) + 65;
      let result = String.fromCharCode(formula);
      encoded += result;
    }
    return encoded;
  },
  decode: (offset, string) => {
    let letras = string.toUpperCase();
    let desloc = Number(offset);
    let decoded = '';
    for (let i = 0; i < string.length; i++) {
      let frase = letras.charCodeAt(i);
      let formula = (((frase + 65) - desloc) % 26) + 65;
      let result = String.fromCharCode(formula);
      decoded += result;
    }
    return decoded;
  }

}
export default cipher;