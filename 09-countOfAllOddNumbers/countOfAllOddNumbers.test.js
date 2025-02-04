// This file is only for viewing;

const countOfAllOddNumbers = require("./countOfAllOddNumbers");
const { expect } = require("chai");

describe("the countOfAllOddNumbers(nums) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = countOfAllOddNumbers([1,2,3,4,5,6]);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should return a value that indicates the total amount of numbers that are odd", function() {
    let submittedSolution = countOfAllOddNumbers([7,8,9,10,11]);
    expect(submittedSolution, "the output does not reflect an accurate amount of numbers that are odd").to.equal(3);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryNums = [[0], [0,1], [0,1,2], [0,1,2,3], [5,5,5,5,5,5]];
    let submittedSolution = countOfAllOddNumbers;
    expect(submittedSolution(auxillaryNums[0])).to.equal(0);
    expect(submittedSolution(auxillaryNums[1])).to.equal(1);
    expect(submittedSolution(auxillaryNums[2])).to.equal(1);
    expect(submittedSolution(auxillaryNums[3])).to.equal(2);
    expect(submittedSolution(auxillaryNums[4])).to.equal(6);
  })

  it("should not conduct mutative operations on the input array", function() {
    let sampleNums = [10,20,30,40,50,60,70,80,90,100,95];
    countOfAllOddNumbers(sampleNums);
    expect(sampleNums).to.eql([10,20,30,40,50,60,70,80,90,100,95]);
  })

})