const nav = document.querySelector ('.nav');
document.querySelector ('#menu').onclick = () => {
  nav.classList.toggle('active');
};

const humberger = document.querySelector ('#menu');
document.addEventListener ("click", function(e) {
  if(!humberger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove ('active');
  }
});