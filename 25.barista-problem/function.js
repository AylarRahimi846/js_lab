

function barista(coffees) {
    if (coffees.length === 0) {
        return 0
    }

    let newArray = coffees.sort((a, b) => a - b);
    let waiting = [newArray[0]];
    let sum = [waiting[0]];
    let total = 0;

    for (let i = 1; i < newArray.length; i++) {
        waiting.push(2 + newArray[i]);
    };
    for (let M = 1; M < waiting.length; M++) {
        sum.push(waiting[M] + sum[M - 1]);
    };
    for (let N = 0; N < sum.length; N++) {
        total += sum[N];
    };

    return total
}