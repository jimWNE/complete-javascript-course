/*
 CODING CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

console.log("CODING CHALLENGE #1");

// Test Data 1:
let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

const BMIMark = weightMark / heightMark ** 2;
console.log(BMIMark);

const BMIJohn = weightJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// Test Data 2:
weightMark = 95;
heightMark = 1.88;

weightJohn = 85;
heightJohn = 1.76;

const BMIMark2 = weightMark / heightMark ** 2;
console.log(BMIMark2);

const BMIJohn2 = weightJohn / (heightJohn * heightJohn);
console.log(BMIJohn2);

const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(markHigherBMI2);
*/

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement

console.log("CODING CHALLENGE #2");

const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI is higher than Mark's!`)
}
*/