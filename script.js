const toggle = document.getElementById('toggle');
const mensaje = document.getElementById('mensaje');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    mensaje.style.opacity = '1';
    mensaje.style.transform = 'translateY(0)';
  } else {
    mensaje.style.opacity = '0';
    mensaje.style.transform = 'translateY(10px)';
  }
});