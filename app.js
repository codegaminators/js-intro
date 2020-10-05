// CONDITIONAL STATEMENTS IN JS

// if (condition) {
//        // execute code
// }

let name = prompt("Enter your name");
let gender;
let age;

if (name) {
  gender = prompt(`Hi ${name}, enter your gender`);

  if (gender) {
    age = prompt("Enter age");
    age = Number(age);
    gender = gender.toLowerCase();
  }
  let greeting;

  if (gender === "male") {
    if (age > 17) {
      greeting = `Good morning Sir!, You are welcome to drink`;
    } else {
      greeting = `Good morning Sir!, You are not welcome to drink`;
    }
  } else if (gender == "female") {
    if (age > 17) {
      greeting = `Good morning Ma!, You are welcome to drink`;
    } else {
      greeting = `Good morning Ma!, You are not welcome to drink`;
    }
  } else {
    prompt("Please confirm your gender");
  }

  alert(greeting);
}

// let age;

// age = prompt("Please enter age");

// if (age <= 17) {
//   alert("Please come back when you are 18");
// } else if (Number(age) === 18) {
//   alert("You are just the right age");
// } else {
//   alert("You can drink");
// }
