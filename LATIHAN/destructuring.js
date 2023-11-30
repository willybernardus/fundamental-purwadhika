const arr = ["🥓", '🍕', '🍟']
const [bacon, ...rest] = arr

// console.log(rest);
// console.log(pizza);
// console.log(fries);

const obj = {
    shroom: "🍄",
    banana: "🍌",
    pepper: "🌶"
}
// tanpa destructuring
// const shroom = obj.shroom;
// const banana = obj.banana;
// const pepper = obj.pepper;
// dengan destructuring
const { shroom, banana, pepper } = obj

// bisa di swap
let a = 'foo';
let b = 'bar';

[a, b] = [b, a]

console.log(a, b)