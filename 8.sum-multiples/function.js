let sum = 0;
function multiple(a, b) {
    if (b > 0) {
        for (let i = 1; (i * a) < b; i++) {
            sum += (i * a);
        }
    }
    
    return sum
}