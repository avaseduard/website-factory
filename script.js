const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Set elememnts to light/ dark mode
const setTheme = function (mode) {
  nav.style.backgroundColor =
    mode === 'Dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor =
    mode === 'Dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = `${mode} Mode`;
  toggleIcon.children[1].classList.remove(
    mode === 'Dark' ? 'fa-sun' : 'fa-moon'
  );
  toggleIcon.children[1].classList.add(mode === 'Dark' ? 'fa-moon' : 'fa-sun');
  image1.src = `./img/undraw_proud_coder_${mode.toLowerCase()}.svg`;
  image2.src = `./img/undraw_feeling_proud_${mode.toLowerCase()}.svg`;
  image3.src = `./img/undraw_conceptual_idea_${mode.toLowerCase()}.svg`;
};

// Switching the theme function
const switchTheme = function (event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('theme', 'dark');
    setTheme('Dark');
    localStorage.setItem('theme', 'dark');
  }
  if (!event.target.checked) {
    document.documentElement.setAttribute('theme', 'light');
    setTheme('Light');
    localStorage.setItem('theme', 'light');
  }
};

// Switching the theme at button toggle
toggleSwitch.addEventListener('change', switchTheme);

// Reading the theme from localstorage and setting that theme on reload
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  toggleSwitch.checked = true;
  document.documentElement.setAttribute('theme', 'dark');
  setTheme('Dark');
}
if (currentTheme === 'light') {
  document.documentElement.setAttribute('theme', 'light');
  setTheme('Light');
}
