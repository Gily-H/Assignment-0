// This file is only for viewing;

const countOfAllEvenNumbers = require("./countOfAllEvenNumbers");
const { expect } = require("chai");

describe("the countOfAllEvenNumbers(nums) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = countOfAllEvenNumbers([1,2,3,4,5,6]);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should return a value that indicates the total amount of numbers that are even", function() {
    let submittedSolution = countOfAllEvenNumbers([7,8,9,10]);
    expect(submittedSolution, "the output does not reflect an accurate amount of numbers that are even").to.equal(2);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryNums = [[0], [0,1], [0,1,2], [0,1,2,3], [5,5,5,5,5,5]];
    let submittedSolution = countOfAllEvenNumbers;
    expect(submittedSolution(auxillaryNums[0])).to.equal(1);
    expect(submittedSolution(auxillaryNums[1])).to.equal(1);
    expect(submittedSolution(auxillaryNums[2])).to.equal(2);
    expect(submittedSolution(auxillaryNums[3])).to.equal(2);
    expect(submittedSolution(auxillaryNums[4])).to.equal(0);
  })

  it("should not conduct mutative operations on the input array", function() {
    let sampleNums = [10,20,30,40,50,60,70,80,90,100,95];
    countOfAllEvenNumbers(sampleNums);
    expect(sampleNums).to.eql([10,20,30,40,50,60,70,80,90,100,95]);
  })

})