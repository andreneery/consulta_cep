const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const cep = document.querySelector('input[name="cep"]').value;
  const response = await fetch(`https://api.postmon.com.br/v1/cep/${cep}`);
  const endereco = await response.json();
  resultado.innerHTML = `Rua: ${endereco.logradouro}`;
});
