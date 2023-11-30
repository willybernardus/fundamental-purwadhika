// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    var kalimat = s.split(' ')
    var kata = kalimat[0].length
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i].length < kata) {
            kata = kalimat[i].length
        }

    }
    // console.log(kalimat.length)
    return kata
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// HASIL:
// Test.describe("Example tests", _ => {
//     Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//     Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// });