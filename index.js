function somatorioDivisiveis3e5(numero) {
    let somatorio = 0;

    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }
    return somatorio;
}

function calcularSomatorio() {
    let numeroInformado = document.getElementById('numero').value;
    if (numeroInformado === '' || isNaN(numeroInformado) || parseInt(numeroInformado) <= 0) {
        alert('Por favor, digite um número inteiro positivo válido.');
        return;
    }
    numeroInformado = parseInt(numeroInformado);
    let resultado = somatorioDivisiveis3e5(numeroInformado);
    document.getElementById('resultado').innerText = `O somatório dos valores divisíveis por 3 ou 5 inferiores a ${numeroInformado} é: ${resultado}`;
}

module.exports = somatorioDivisiveis3e5;