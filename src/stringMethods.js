let test;
test =  "This is testing string" 

//length
console.log("length of string",test.length)

//slice
console.log("sliced part",test.slice(4,6));

//substring
console.log("substring is", test.substring(4,6));

//substr
console.log("substr is", test.substr(4,2));

//split
console.log("split string is", test.split(" "));


//replace
let newString= test.replace("is","is not")

//uppercase and lowercase
console.log(test.toUpperCase(),test.toLowerCase());

//trim
console.log("                     trim string          ".trim());
console.log("                     trim string          ".trimStart());
console.log("                     trim string          ".trimEnd());

//charAt and charCodeAt
console.log(test.charAt(3));
console.log(test.charCodeAt(3));

// indexOf
console.log(test.indexOf("string"),test.lastIndexOf("string"));

//match
console.log(test.match("is"));

//includes
console.log(test.includes("test"));
