function primeNumber(number) {
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
        return true
    }
}
console.log(primeNumber(61))