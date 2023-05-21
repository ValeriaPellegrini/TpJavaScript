/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Scripts 

// Obtenemos datos ingresados por usuario
function obtenerDatos(){
    opcionCategoria = document.getElementById("SelectCategoria").value;
    valorCantidad = document.getElementById("cantidad").value;
    var r=[opcionCategoria, valorCantidad]
    return r
}

// Me traigo los valores que voy a necesitar
var botonResume = document.getElementById("resume");
var precioEntrada = 200;
var totalArea = document.getElementById("totalApagar");

// Fc para evaluar el costo de una entrada según la categoría seleccionada
function valorEntrada(categoriaEntrada){
    if (categoriaEntrada == 'Estudiante') {
        return 0.2*precioEntrada;
    } if (categoriaEntrada == 'Trainee') {
        return 0.5*precioEntrada;
    } else {
        return 0.85*precioEntrada;
    }
}

// Fc que evalúa la cantidad ingresada. Si no ingresa nada, será cero
function cantidadValida(cantidadUsuario){
    if (cantidadUsuario == '') {
        return 0;
    } else {
        return parseInt(cantidadUsuario);
   }
}

// Evento que al hacer click en resume realice lo pedido
botonResume.onclick = function(){
    categoriaEntrada = obtenerDatos()[0];
    cantidadUsuario = obtenerDatos()[1];
    costoTotal = valorEntrada(categoriaEntrada) * cantidadValida(cantidadUsuario);
    totalArea.value = `El total a pagar es $: ${costoTotal}`;
}
