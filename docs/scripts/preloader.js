var preloader = document.getElementById('preloader');
setTimeout(function() {
  preloader.classList.add('cerrarPreloader');;
  document.body.style.overflowY= "visible";// despueés de cargar le devolvemos el scroll
}, 6500);