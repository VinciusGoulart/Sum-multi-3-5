document.getElementById("result").addEventListener("click", function () {
    const number = document.getElementById("numberInput").value;
    const resultContainer = document.getElementById("resultContainer");

    // Verifique se o número é válido
    if (number <= 0 || number === "") {
        openErrorModal("Digite um valor positivo maior que 0.");
        resultContainer.innerHTML = ""; // Limpe o conteúdo do contêiner de resultados
    } else {
        // Calcule o resultado e exiba-o
        const result = sumM3And5(number);
        resultContainer.innerHTML = `Resultado: ${result}`;
    }
});

function openErrorModal(errorMessage) {
    const errorModal = document.getElementById('errorModal');
    const errorText = document.getElementById('errorText');

    errorText.textContent = errorMessage;
    errorModal.style.display = 'block';

    // Feche o modal automaticamente após 2 segundos
    setTimeout(function() {
        errorModal.style.display = 'none';
    }, 2000);
}

function sumM3And5(num) {
    let result = 0;

    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result = result + i;
        }
    }

    return result;
}