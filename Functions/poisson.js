let exponential = 2.718281828;
let numerator, denominator;

function poisson(k, landa) {
    exponentialPower = Math.pow(exponential, -landa); // negative power k
    landaPowerK = Math.pow(landa, k); // Landa elevated k
    numerator = exponentialPower * landaPowerK;
    denominator = fact(k); // factorial of k.

    return (numerator / denominator);
}

function fact(x) {
    if (x == 0) {
        return 1;
    }
    return x * fact(x - 1);
}

module.exports = poisson