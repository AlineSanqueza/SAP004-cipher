import cipher from './cipher.js'

document.getElementById('encode').addEventListener('click', (e) => {
  e.preventDefault();
  let offset = document.getElementById('key').value;
  let string = document.getElementById('msg').value.toUpperCase();
  let saida = cipher.encode(offset, string);
  if (string == '') {
    alert('Digite a mensagem');
} else if (offset == 0) {
  alert('Deslocamento inválido');
} else {
  document.getElementById('encoded-text').value = saida;
}
});

document.getElementById('decode').addEventListener('click', (e) => {     
  e.preventDefault();
  let offset = document.getElementById('key').value;
  let string = document.getElementById('msg').value.toUpperCase();
  let saida = cipher.decode(offset, string);
    if (string == '') {
      alert('Digite a mensagem');
    } else if (offset == 0) {
      alert('Deslocamento inválido');
    } else {
      document.getElementById('encoded-text').value = saida;
    }
});

document.getElementById('clear').addEventListener('click', (e) => {
  e.preventDefault();
  let offset = document.getElementById('key');
  let string = document.getElementById('msg');
  let saida = document.getElementById('encoded-text');
  offset.value = '';
  string.value = '';
  saida.value = '';
});
