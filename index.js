let numeros = [];

function agregarNumero() {
    const numeroInput = document.getElementById('numeroInput');
    const numero = parseFloat(numeroInput.value);

    if (!isNaN(numero)) {
        numeros.push(numero);
        actualizarLista();
        numeroInput.value = '';
    } else {
        alert('Ingresa un número válido.');
    }
}

function actualizarLista() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    numeros.forEach(numero => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(numero));
        resultElement.appendChild(li);
    });
}
function generarNumeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(numeroAleatorio);
    actualizarLista();
}

function procesarNumeros() {
    const mayorElement = document.getElementById('mayor');
    const menorElement = document.getElementById('menor');
    const promedioElement = document.getElementById('promedio');
    const sumaElement = document.getElementById('suma');

    if (numeros.length > 0) {
        const mayor = Math.max(...numeros);
        const menor = Math.min(...numeros);
        const promedio = numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
        const suma = numeros.reduce((acc, num) => acc + num, 0);

        mayorElement.textContent = mayor;
        menorElement.textContent = menor;
        promedioElement.textContent = promedio.toFixed(2);
        sumaElement.textContent = suma;
    } else {
        alert('Agrega al menos un número antes de procesar.');
    }
}