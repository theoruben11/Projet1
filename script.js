const container = document.getElementById('container');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');

if (container && signUpBtn && signInBtn) {
  signUpBtn.onclick = () => container.classList.add('right-panel-active');
  signInBtn.onclick = () => container.classList.remove('right-panel-active');
}