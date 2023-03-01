const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', e => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '') {
        alert('Por favor, ingrese su correo electronico');
        return;
    }

    if (password === '') {
        alert('Por favor, ingrese su contraseña');
        return;
    }

    // Si llegamos hasta aquí, el formulario es válido, así que podemos enviar los datos al servidor o hacer lo que sea necesario
});