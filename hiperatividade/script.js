const steps = document.querySelectorAll('.step');

function nextStep() {
  const currentStep = document.querySelector('.active');
  const currentStepIndex = Array.from(steps).indexOf(currentStep);
  const nextStepIndex = currentStepIndex + 1;

  if (nextStepIndex < steps.length) {
    currentStep.classList.remove('active');
    steps[nextStepIndex].classList.add('active');
    updateProgressBar();
  }
}

function updateProgressBar() {
  const currentStep = document.querySelector('.active');
  const currentStepIndex = Array.from(steps).indexOf(currentStep);
  const progressBar = document.querySelector('#progress-bar');
  progressBar.value = ((currentStepIndex + 1) / steps.length) * 100;
}

function submitForm() {
  const form = document.querySelector('#quiz-form');
  form.submit();
}

steps.forEach((step) => {
  const inputs = step.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => {
    input.addEventListener('click', nextStep);
  });
});
