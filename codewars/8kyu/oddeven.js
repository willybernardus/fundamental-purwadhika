// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function oddEven(number) {
    if (number % 2 == 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

console.log(oddEven(2))
console.log(oddEven(0))
console.log(oddEven(7))
console.log(oddEven(1))




// HASIL:
// Test.assertEquals(even_or_odd(2), "Even")
// Test.assertEquals(even_or_odd(0), "Even")
// Test.assertEquals(even_or_odd(7), "Odd")
// Test.assertEquals(even_or_odd(1), "Odd")