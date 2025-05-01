// Seleccionamos los elementos
const toggle = document.getElementById('_toggle');
const items = document.getElementById('_items');

// Agregamos el evento al botón hamburguesa
//Activa y desactiva el menú cuando hacés clic en el botón hamburguesa
toggle.addEventListener('click', () => {
    items.classList.toggle('open');
    toggle.classList.toggle('active'); // activa la cruz      
});
