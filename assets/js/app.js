let number = prompt("Reqem yaz qardas?")

function countdrobs(inputNumber) {
    let count500 = 0;
    let count100 = 0;
    let count50 = 0;
    let count20 = 0;
    let count10 = 0;

    while (inputNumber >= 500) {
        inputNumber = inputNumber - 500;
        count500++;
    }
    while (inputNumber >= 100) {
        inputNumber = inputNumber - 100;
        count100++;
    }
    while (inputNumber >= 50) {
        inputNumber = inputNumber - 50;
        count50++;
    }
    while (inputNumber >= 20) {
        inputNumber = inputNumber - 20;
        count20++;
    }
    while (inputNumber >= 10) {
        inputNumber = inputNumber - 10;
        count10++;
    }

    console.log("500 eded:", count500);
    console.log("100 eded:", count100);
    console.log("50 eded:", count50);
    console.log("20 eded:", count20);
    console.log("10 eded:", count10);
}
countdrobs(number);