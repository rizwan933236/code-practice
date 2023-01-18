function intersection(array1, array2) {
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                result.push(array1[i]);
            }
        }
    }
    console.log(" inter section of two arrays")
    return result.sort();
}
arr = [1, 2, 3, 5, 6]
arr2 = [5, 2, 3, 7]
console.log(intersection(arr, arr2))



function union(a1, a2) {
    var result = [];
    for (var i = 0; i < a1.length; i++) {

        result.push(a1[i]);

    }
    for (i = 0; i < a2.length; i++) {
        if (a1.indexOf(a2[i]) === -1) {
            result.push(a2[i]);
        }
    }
    console.log(" Union of two Arrays")
    return result.sort();
}
a1 = [1, 3, 5, 7]
a2 = [2, 4, 5]

console.log(union(a1, a2))