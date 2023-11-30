// Several people are waiting in a long queue for the theater. Write a function that returns a name from a position in the queue.

// You will not be given any out-of-range (queue position 0) or null values.

// Examples:

queue = ["Sally", "Jim", "Bob", "Kate"];

// findInQueue(queue, 1); // --> Returns "Sally"

// findInQueue(queue, 3); // --> Returns "Bob"

function findInQueue(val, index) {

}

// iqTest("2 4 7 8 10") // => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") // => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(num) {

}

var massa = 58
var tinggi = 178 / 100
var IMT = massa / (tinggi ** 2)
var message

if (IMT < 18.5) {
    message = 'berat badan kurang'
} else if (IMT >= 18.5 && IMT <= 24.9) {
    message = 'berat badan ideal'
} else if (IMT >= 25 && IMT < 30) {
    message = 'berat badan berlebih'
} else if (IMT >= 30 && IMT < 40) {
    message = 'berat badan sangat berlebih'
} else {
    message = 'obesitas'
}
console.log(IMT)
console.log(message)