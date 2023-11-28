document.getElementById("result").addEventListener("click", function () {
    const number = document.getElementById("numberInput").value;
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = verifyNumber(number);
});

function verifyNumber(number) {    
    if (number <= 0 || number === "") {
        openErrorModal("Digite um valor positivo maior que 0.");
        return "";
    } else {        
        const result = sumM3And5(number);
        return `Resultado: ${result}`;
    }
}

function openErrorModal(errorMessage) {
    const errorModal = document.getElementById('errorModal');
    const errorText = document.getElementById('errorText');

    errorText.textContent = errorMessage;
    errorModal.style.display = 'block';

    setTimeout(function () {
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