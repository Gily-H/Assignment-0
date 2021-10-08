// This file is only for viewing;

let StudentSolution = require("./countDownSum");
const { expect } = require("chai");
const sinon = require("sinon");

describe("the countDownSum(num) function", function () {

  let submittedSolution;

  // call this function before each test case
  beforeEach(function() {
    submittedSolution = new StudentSolution();
  })

  it("should return a number", function () {
    expect(submittedSolution.countDownSum(3), "the output is not a finite number").to.be.finite;
  })

  it("should return the sum of all numbers from `num` down to and including 1", function () {
    expect(submittedSolution.countDownSum(10)).to.equal(55);
  })

  it("should be implemented recursively", function () {

    // instantiate spy-object based on specified class method
    // params: object instance, instance method name
    let mySpy = sinon.spy(submittedSolution, "countDownSum");
    
    // callCount = number of method calls
    submittedSolution.countDownSum(5);
    expect(mySpy.callCount).to.equal(5);
    
    // reset state of the spy object
    mySpy.resetHistory();

    submittedSolution.countDownSum(10);
    expect(mySpy.callCount).to.equal(10);

    // replace spy with the original instance method
    mySpy.restore();
  })

  it("should pass auxillary test cases", function() {
    expect(submittedSolution.countDownSum(1)).to.equal(1);
    expect(submittedSolution.countDownSum(2)).to.equal(3);
    expect(submittedSolution.countDownSum(3)).to.equal(6);
    expect(submittedSolution.countDownSum(4)).to.equal(10);
    expect(submittedSolution.countDownSum(100)).to.equal(5050);
  })

});
