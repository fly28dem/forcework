btns = document.getElementsByClassName('copy_btn');

// onclick для всех кнопок копирования
for (btn of btns) {
  btn.onclick = copyToClipboard;
};

async function copyToClipboard(event) {
  const text = document.getElementById(event.target.getAttribute('data-target')).innerText;
  console.log(text)
  await navigator.clipboard.writeText(text);
  event.target.classList.replace('copy_btn', 'copy_btn_completed');
  setTimeout(() => {
    event.target.classList.replace('copy_btn_completed', 'copy_btn');
  }, 2000)
}