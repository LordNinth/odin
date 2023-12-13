
// A flag variable, in its simplest form, is a variable you define to have one value until some 
// condition is true, in which case you change the variable's value. It is a variable you can use to
// control the flow of a function or statement, allowing you to check for certain conditions while your function progresses.

const names = ["kohn", "Mary"];
let found = false;
for (let i = 0; i <= names.length; i++) {
  // console.log(names[i])

  if (names[i].startsWith("J")) found = true;
  break;
}

if (found) {
  console.log("Found");
} else {
  console.log("Not found");
}
