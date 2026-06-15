const form = document.querySelector('#scanForm');
const scoreNumber = document.querySelector('#scoreNumber');
const scoreLabel = document.querySelector('#scoreLabel');
const scoreCopy = document.querySelector('#scoreCopy');

function resultFor(score) {
  if (score >= 84) {
    return {
      label: 'Launch ready — complete the final preflight.',
      copy: 'Your answers show strong guardrails. SHIPSAFE helps preserve the evidence, document the decision and keep the project protected during the final launch push.',
    };
  }
  if (score >= 59) {
    return {
      label: 'Staging ready — material risks remain.',
      copy: 'You have several controls in place, but unresolved security, rollback or verification gaps could still turn a clean demo into a fragile launch.',
    };
  }
  return {
    label: 'High launch risk — do not expose this to users yet.',
    copy: 'The project needs stronger agent boundaries, security checks, regression evidence and recovery procedures before it should be published or presented as production-ready.',
  };
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const checks = [...form.querySelectorAll('input[name="check"]')];
  const passed = checks.filter((check) => check.checked).length;
  const score = Math.round((passed / checks.length) * 100);
  const result = resultFor(score);
  scoreNumber.textContent = `${score}/100`;
  scoreLabel.textContent = result.label;
  scoreCopy.textContent = result.copy;
});
