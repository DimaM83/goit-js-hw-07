const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
const helloEl = document.querySelector('h1');

input.addEventListener('input', () => {
  const name = input.value.trim();

  if (name === '') {
    helloEl.firstChild.textContent = '';
    output.textContent = 'Anonymous';
  } else {
    helloEl.firstChild.textContent = 'Hello,';
    output.textContent = name;
  }
});
