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
*/
console.log("CODING CHALLENGE #1");

// Test Data 1:
let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

const bmiMark = weightMark / heightMark ** 2;
console.log(bmiMark);

const bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// Test Data 2:
weightMark = 95;
heightMark = 1.88;

weightJohn = 85;
heightJohn = 1.76;

const bmiMark2 = weightMark / heightMark ** 2;
console.log(bmiMark2);

const bmiJohn2 = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn2);

const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI2);