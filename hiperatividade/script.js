// Seleciona os elementos do formulário e inicializa o valor do contador de progresso
const form = document.getElementById('quiz-form');
const steps = form.querySelectorAll('.step');
const progressBar = document.getElementById('progress-bar');
let progress = 0;

// Esconde todos os passos, exceto o primeiro
for (let i = 1; i < steps.length; i++) {
  steps[i].classList.remove('active');
}

// Adiciona um manipulador de eventos de clique para cada botão de resposta
const answerButtons = form.querySelectorAll('input[type="radio"]');
answerButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    // Obtém o passo atual e próximo
    const currentStep = form.querySelector(`.step[data-step="${form.dataset.activeStep}"]`);
    const nextStep = form.querySelector(`.step[data-step="${parseInt(form.dataset.activeStep) + 1}"]`);
    // Atualiza o valor do contador de progresso e a barra de progresso
    progress += 100 / steps.length;
    progressBar.value = progress;
    // Verifica se há um próximo passo e o torna ativo se houver
    if (nextStep) {
      currentStep.classList.remove('active');
      nextStep.classList.add('active');
      form.dataset.activeStep = nextStep.dataset.step;
    } else {
      // Submete o formulário se estiver na última pergunta
      form.submit();
    }
  });
});
