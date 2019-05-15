function calculate() {
    const initialFee = document.getElementById("initial-fee");
    const amount = document.getElementById("amount");
    const month = document.getElementById("month");
    const totalSum = (+amount.value - +initialFee.value) / +month.value;
    const x = NaN;
    if (+initialFee.value >= +amount.value) {
        document.getElementById('total').innerHTML = '<span class="error">Проверьте введенные данные!</span>';
        amount.classList.add('error');
    } else if (+month.value <= 0) {
        document.getElementById('total').innerHTML = '<span class="error">Проверьте введенные данные!</span>';
        month.classList.add('error');
    } else {
        document.getElementById('total').innerHTML = totalSum.toFixed(2) + ' BYN в месяц';
        amount.removeAttribute('class');
        initialFee.removeAttribute('class');
    }
    initialFee.addEventListener("click", function () {
        initialFee.removeAttribute('class');
    });
    amount.addEventListener("click", function () {
        amount.removeAttribute('class');
    });
    month.addEventListener("click", function () {
        month.removeAttribute('class');
    });
}