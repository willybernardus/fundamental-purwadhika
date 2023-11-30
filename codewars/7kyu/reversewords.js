function reverse(str) {
    let splitString = str.split("")
    let reverseString = splitString.reverse()
    let finalStr = reverseString.join("");
    return finalStr
};

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

console.log(reverse("This is an example!"));