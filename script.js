const input = document.querySelector('#input');
const target = document.querySelector('#target');
const message = document.querySelector('#message');

const text = 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.';

target.textContent = text;

input.addEventListener('input', function() {
  const inputValue = input.value;
  if (inputValue === text) {
    message.textContent = 'Correct!';
  } else if (inputValue === text.substring(0, inputValue.length)) {
    message.textContent = 'Keep typing...';
  } else {
    message.textContent = 'Incorrect!';
  }
});
