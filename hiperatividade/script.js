const form = document.querySelector('#quiz-form');
const steps = form.querySelectorAll('.step');
const progressBar = document.querySelector('#progress-bar');
let currentStep = 0;

function showStep(stepNumber) {
  steps[currentStep].classList.remove('active');
  steps[stepNumber].classList.add('active');
  progressBar.value = (stepNumber + 1) / steps.length * 100;
  currentStep = stepNumber;
}

function nextStep() {
  const currentFieldset = steps[currentStep].querySelector('fieldset');
  const selectedInput = currentFieldset.querySelector('input:checked');
  
  if (!selectedInput) {
    alert('Por favor, selecione uma opção.');
    return;
  }
  
  if (currentStep === steps.length - 1) {
    form.submit();
    return;
  }
  
  showStep(currentStep + 1);
}

steps.forEach((step, index) => {
  const fieldset = step.querySelector('fieldset');
  const inputs = fieldset.querySelectorAll('input');
  
  inputs.forEach(input => {
    input.addEventListener('click', nextStep);
  });
});

showStep(0);
