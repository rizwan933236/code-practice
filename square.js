function square([arr]) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i])
    }
    return result
}
arr = [2, 6, 7]
console.log(square([arr]))