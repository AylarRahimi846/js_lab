let scores = [17.5, 16, 18, 19.75, 18.25, 18.5, 20]

// first
let sum = 0;
function avarageScore(scores) {
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    let result = sum / scores.length
    return result
}

// second
function maxScore(scores) {
    let highest = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > lowest) {
            highest = scores[i]
        }
    }
    return highest
}

// third
function minScore(scores) {
    let lowest = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < lowest) {
            lowest = scores[i]
        }
    }
    return lowest
}