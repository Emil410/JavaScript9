let number = prompt("Reqem yaz qardas!")

function countdrobs(inputNumber) {
    let count500 = 0;
    let count200 = 0;
    let count100 = 0;
    let count50 = 0;
    let count20 = 0;
    let count10 = 0;
    let count5 = 0;
    let count1 = 0;

    while (inputNumber >= 500) {
        inputNumber = inputNumber - 500;
        count500++;
    }
    while (inputNumber >= 200) {
        inputNumber = inputNumber - 200;
        count200++;
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
    while (inputNumber >= 5) {
        inputNumber = inputNumber - 5;
        count5++;
    }
    while (inputNumber >= 1) {
        inputNumber = inputNumber - 1;
        count1++;
    }
    if (count500 > 0) {
        console.log("500 eded:", count500);
    }
    if (count200 > 0) {
        console.log("200 eded:", count200);
    }
    if (count100 > 0) {
        console.log("100 eded:", count100);
    }
    if (count50 > 0) {
        console.log("50 eded:", count50);
    }
    if (count20 > 0) {
        console.log("20 eded:", count20);
    }
    if (count10 > 0) {
        console.log("10 eded:", count10);
    }
    if (count5 > 0) {
        console.log("5 eded:", count5);
    }
    if (count1 > 0) {
        console.log("1 eded", count1);
    }
}
countdrobs(number);