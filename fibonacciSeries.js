function fibonacciSeries(n) {
    let num1 = 0;
    let num2 = 1;
    let nextNum
    for (let i = 0; i < n; i++) {
        console.log(num1)
        nextNum = num1 + num2
        num1 = num2;
        num2 = nextNum;
    }
}
fibonacciSeries(10)