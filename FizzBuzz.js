// JavaScript source code
function myFizzBuzz() {
  let FB = "FizzBuzz : ";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      FB = FB + "Fizz-Buzz"
    }
    else if (i % 3 === 0) {
      FB = FB + "Fizz";
    }
    else if (i % 4 === 0) {
      FB = FB + "Buzz";
    }
    else {
      FB = FB + i.toString()
    }
    if (i != 100) {
      FB = FB + ",";
    }
  }
  return FB;
}