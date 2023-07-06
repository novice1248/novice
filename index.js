function main() {
    let count = 0;
    const countDisplay = document.getElementById('count-display');
    const textSpace = document.getElementById('text-space');

    const countUpButton = document.getElementById('count-up');
    countUpButton.addEventListener('click', function () {
        count += 1;
        countDisplay.innerText = count;
    });

    const countDownButton = document.getElementById('count-down');
    countDownButton.addEventListener('click', function() {
        count -= 1;
        countDisplay.innerText = count;
    });

    const countResetButton = document.getElementById('count-reset');
    countResetButton.addEventListener('click', function() {
        count = 0;
        countDisplay.innerText = count;
    });

    const textAlertButton = document.getElementById('alert');
    textAlartButton.addEventListener('click', function() {
        alert();
    })

}

main();