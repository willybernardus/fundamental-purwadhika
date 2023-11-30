// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, 
// our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
    let hasil1 = dragons * 2
    let hasil2 = bullets >= hasil1
    if (bullets = hasil1 && hasil2) {
        return true
    } else {
        return false
    }
}

console.log(hero(10, 5))
console.log(hero(7, 4))
console.log(hero(4, 5))
console.log(hero(100, 40))
console.log(hero(1500, 751))
console.log(hero(0, 1))



// HASIL:
// Test.assertEquals(hero(10, 5), true);
// Test.assertEquals(hero(7, 4), false);
// Test.assertEquals(hero(4, 5), false);
// Test.assertEquals(hero(100, 40), true);
// Test.assertEquals(hero(1500, 751), false);
// Test.assertEquals(hero(0, 1), false);