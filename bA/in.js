let inputNumber;
let n

function findOppositeNumber(n, inputNumber) {
    n = parseInt(prompt("Nhập số số:"))
    do {
        inputNumber = parseInt(prompt("Nhập số đầu vào:"))
    } while (inputNumber < 0 || inputNumber > n - 1)
    if (inputNumber < (n / 2)) {
        alert(inputNumber + n / 2);
    } else {
        alert(inputNumber - n / 2);
    }
}
findOppositeNumber();