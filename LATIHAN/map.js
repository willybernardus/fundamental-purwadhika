function oddEven(arr) {
    var result = arr.map((val) => {
        if (val % 2 == 0) {
            return 'even'
        } else {
            return 'odd'
        }
    })
    return result
}

// console.log(oddEven([1, 3, 5, 6]))

// mencari rata-rata
// jumlah dari data pada array ditambah lalu dibagi jumlah index pada array
function getAverage(marks) {
    //TODO : calculate the downwar rounded average of the marks array
    var sum = 0
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]
    }
    console.log(sum)
    var avg = sum / marks.length
    return avg
}

console.log((getAverage([2, 2, 2, 2])))