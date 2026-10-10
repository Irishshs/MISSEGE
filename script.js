const loginForm = document.getElementById('login-form');
const loginOverlay = document.getElementById('login-overlay');
const usernameInput = document.getElementById('username'); // Grab the input field


loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents page reload

  // 1. Get the name entered by the user
    const name = usernameInput.value;

  // 2. Show the alert pop-up
    alert(`Haii ${name}`);

  // 3. Fade out the form content
    loginOverlay.classList.add('fade-content');

  // 4. Roll up the pink curtain after a short delay
    setTimeout(() => {
    loginOverlay.classList.add('rolled-up');
    }, 400);
});
