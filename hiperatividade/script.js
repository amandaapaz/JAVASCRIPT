const form = document.querySelector('#quiz-form');
const progress = document.querySelector('#progress-bar');
const steps = document.querySelectorAll('.step');
const resultButton = document.querySelector('.result-button');

let currentStep = 0;

// Função para atualizar a barra de progresso
function updateProgress() {
  const progressValue = ((currentStep + 1) / steps.length) * 100;
  progress.value = progressValue;
}

// Função para mostrar o passo atual
function showCurrentStep() {
  steps.forEach((step, index) => {
    if (index === currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

// Função para avançar para o próximo passo
function nextStep() {
  currentStep++;
  if (currentStep >= steps.length) {
    form.submit();
  } else {
    updateProgress();
    showCurrentStep();
  }
}

// Adicionar o evento click para cada botão de resposta
const answerButtons = document.querySelectorAll('input[type="radio"]');
answerButtons.forEach((button) => {
  button.addEventListener('click', nextStep);
});

// Esconder todos os passos, exceto o primeiro
steps.forEach((step, index) => {
  if (index !== 0) {
    step.classList.remove('active');
  }
});

// Adicionar o evento de envio do formulário para o botão de resultado
resultButton.addEventListener('click', (event) => {
  event.preventDefault();
  form.submit();
});

// Iniciar o progresso e mostrar o primeiro passo
updateProgress();
showCurrentStep();
