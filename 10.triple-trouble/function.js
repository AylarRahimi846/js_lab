

function tripleTrouble(a, b, c) {
    let count= a.length;
    let sum = "";
    for (let i = 0; i < count; i++) {
        sum += a[i] + b[i] + c[i];
    }
    return sum;
}