document.getElementById("result").addEventListener("click", function () {
    const number = document.getElementById("numberInput");

    const result = sumM3And5(number.value);

    document.getElementById("resultContainer").innerHTML = result;
});

function sumM3And5(num) {
    let result = 0;

    if (num < 0) {
        return "Digite um valor positivo maior que 0";
    }

    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result = result + i;
        }
    }

    return result;
}
