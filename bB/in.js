const number1 = document.getElementById('number');
const button1 = document.getElementById('quay');

let d = 0;
let a = Math.floor(Math.random() * 3);

button1.addEventListener('click', function () {
    // let arr = document.getElementsByTagName('input')
    // console.log(arr);
    // let number1 = arr[0].value;
    let  n = parseInt(number1);
    while (d < 3 && 0 <= n <= 10) {
        d++;
       
        if (n === a && d <= 3) {
            alert("Bạn đã trúng thưởng")
            break;
        } else if (n !== a && d == 3) {
            alert(`${a} là số trúng thưởng.`)
            break;
        } else {
            alert(`Nhập lại`);
        }
        break;
    }
})