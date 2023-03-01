// Selecione o formulário e o botão Enviar
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

// Adicione um evento de clique no botão Enviar
submitButton.addEventListener('click', (event) => {
  // Previna o envio padrão do formulário
  event.preventDefault();

  // Selecione todos os menus suspensos
  const selects = document.querySelectorAll('select');

  let total = 0;
  let count = 0;

  // Itere sobre os menus suspensos, calcule a pontuação total e conte o número de perguntas
  selects.forEach((select) => {
    if (select.value !== '') {
      total += parseInt(select.value);
      count++;
    }
  });

  // Calcule a pontuação média
  const average = total / count;

  // Determine o nível de desatenção com base na pontuação média
  let level = '';
  let image = '';
  if (average >= 4.5) {
    level = 'muito alta';
    image = 'images/ansiedade.jpg';
  } else if (average >= 3.5) {
    level = 'alta';
    image = 'images/ansiedade.jpg';
  } else if (average >= 2.5) {
    level = 'média';
    image = 'images/ansiedade.jpg';
  } else if (average >= 1.5) {
    level = 'baixa';
    image = 'images/ansiedade.jpg';
  } else {
    level = 'muito baixa';
    image = 'images/ansiedade.jpg';
  }

  // Selecione o contêiner onde o resultado será exibido
  const container = document.querySelector('.container');

  // Crie um elemento de parágrafo para exibir o resultado
  const result = document.createElement('p');
  result.classList.add('text-center');
  result.textContent = `Seu nível de desatenção é ${average * 20}%.`;

  // Crie um elemento de imagem para exibir a imagem correspondente
  const img = document.createElement('img');
  img.classList.add('mx-auto');
  img.src = image;
  img.alt = `Imagem representando o nível de desatenção ${level}.`;

  // Adicione o resultado e a imagem ao contêiner
  container.appendChild(result);
  container.appendChild(img);

  // Desative o botão Enviar para impedir envios adicionais
  submitButton.disabled = true;
});
