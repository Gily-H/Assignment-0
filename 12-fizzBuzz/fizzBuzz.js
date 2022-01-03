function fizzBuzz(start, end) {
  let arr = [];

  // include start value and end value
  for (let i = start; i <= end; i++) {
    let result = i;
  
    // check if multiple of both 3 and 5 first
    if (i % 3 === 0 && i % 5 === 0) {
      result = "FizzBuzz";
    } else if (i % 3 === 0) {
      result = "Fizz";
    } else if (i % 5 === 0) {
      result = "Buzz";
    } 
    
    arr.push(result);
  }

  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;