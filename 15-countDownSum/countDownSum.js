class MySolution {
  countDownSum(num) {
    // base case
    if (num === 1) {
      return 1;
    }

    // recursive call
    return num + this.countDownSum(num - 1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;