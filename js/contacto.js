const input = document.querySelector('input');
const form = document.querySelector('form');


function setCustomValidity(mensaje) {
    const div1 = document.querySelector("#divForm");
    div1.textContent = mensaje;
    div1.style.dispaly = (mensaje) ? 'block' : 'none'; //condicion ? tru : false


};


// validacion de nombre
// const boton = document.querySelector('#btn');
// boton.addEventListener('submit', function(){
valor = valor.trim();

const validarInputRegExp = (valor) => {
    console.log('Estoy imprimiendo el valor nada mas', valor);
    let validarNombreRegExp = /^[A-Z][a-z]{3,10}$/;
    if (!validarNombreRegExp.test(valor)) {
        let mensaje = 'Este campo no es valido';
        let longitud = valor.length;
        if (longitud === 0) mensaje = "Este campo es obligatorio";
        else if (longitud < 4) mensaje = "Este campo debe tener mas de 4 caracteres";
        else if (longitud < 20) mensaje = "Este campo debe tener menos de 20 caracteres";

        setCustomValidity(mensaje);
        return null;
    }

    setCustomValidity('');
    return null;
};

form.addEventListener('submit', e => {
    e.preventDefault(); //detuvimos el comportamiento por defecto del browser

    let valor = validarInputRegExp(input.value);
    if (valor) {
        console.log('valor ingresado: [${valor}]');
    }
}); 