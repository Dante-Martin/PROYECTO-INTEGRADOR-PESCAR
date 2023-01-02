const barra = document.getElementsByClassName("pegado");

window.addEventListener('scroll', function () {

    barra[0].classList.toggle("scroll-abajo", window.scrollY > 0);
});//cuando scrollea para abajo, se cambia hacia la clase abajo


const btnMenu = document.querySelector('#btnMenu');
const background = document.querySelector('#background');
const menu = document.querySelector('#menu');
btnMenu.addEventListener('click', function () {
    menu.classList.toggle('mostrar');
    background.classList.toggle('mostrar-background');
});
//-------------------------------------------------------------------//
/*------aparece y desaparece el rectangulo de texto en menu.css------*/
//-------------------------------------------------------------------//

/*tiempo*/

const buscarTiempo = document.getElementsByClassName('label')[0];
buscarTiempo.addEventListener('click', function () {
    /* let mostrarTiempo = document.getElementsByClassName("item");
     mostrarTiempo[0].style.opacity = "1";
     mostrarTiempo[1].style.opacity = "1";
     mostrarTiempo[2].style.opacity = "1";
 */

    let pepe = document.getElementsByClassName("buscar--texto");
    pepe[0].classList.remove("buscar--texto--abierto");
    pepe[1].classList.remove("buscar--texto--abierto");
});
// ---------------------------------------------------------
// ejemplo de como seria si elijo un rango de tiempo y quiero que escrollee la pantalla para abajo. Esto se resolvio en la carpeta recetas.js 

// const tiempo1 = document.getElementsByClassName('item');
// console.log(tiempo);
// tiempo[0].addEventListener('click', function () {
// document.documentElement.scrollTop = 800;
// console.log(document.documentElement.scrollTop);
// });

// const tiempo2 = document.getElementsByClassName('item');
// console.log(tiempo2);
// tiempo2[1].addEventListener('click', function () {
//     document.documentElement.scrollTop = 800;
//     console.log(document.documentElement.scrollTop);
// });

// const tiempo3 = document.getElementsByClassName('item');
// console.log(tiempo3);
// tiempo3[2].addEventListener('click', function () {
//     document.documentElement.scrollTop = 800;
//     console.log(document.documentElement.scrollTop);
// });
// ----------------------------------------------------
//canasta
const buscarTexto = document.getElementById('boton-buscar-texto1');//con la constante agarro el id del icono
buscarTexto.addEventListener('click', function () { //le digo que cuando le haga click al icono se ejecuta la funcion
    let mostrarTextoCanasta = document.getElementById('mostrar-texto-canasta');//tomo al id 

    let mostrarTextoLupa = document.getElementById('mostrar-texto-lupa');
    mostrarTextoLupa.classList.remove('buscar--texto--abierto');
    //cuando se activa mostrarTextoCanasta quiro buscar--texto--abierto a la lupa


    mostrarTextoCanasta.classList.toggle('buscar--texto--abierto');//hago toggle por esta clase
});

//idem anterior lupa
const buscarTexto2 = document.getElementById('boton-buscar-texto2');
buscarTexto2.addEventListener('click', function () {
    let mostrarTextoLupa = document.getElementById('mostrar-texto-lupa');

    let mostrarTextoCanasta = document.getElementById('mostrar-texto-canasta');
    mostrarTextoCanasta.classList.remove('buscar--texto--abierto');

    mostrarTextoLupa.classList.toggle('buscar--texto--abierto');
});

//-------------------Cambio de login a nombre de usuario-------------------

const cambioNombre = document.getElementById('usuario');
const pepe = localStorage.getItem('nombreUsuario'); //acordarse de ponerlo en el js de Login    
if (pepe == undefined) {
    cambioNombre.innerHTML = "Login";

} else {
    cambioNombre.innerHTML = pepe;
}





