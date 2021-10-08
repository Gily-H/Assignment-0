// This file is only for viewing;

const productOfAnyAmountOfNumbers = require("./productOfAnyAmountOfNumbers");
const { expect } = require("chai");
const sinon = require("sinon");

describe("the productOfAnyAmountOfNumbers(...args) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = productOfAnyAmountOfNumbers(1,2);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should be able to take in an indefinite amount of arguments", function() {
		let submittedSolution = productOfAnyAmountOfNumbers;

		// instantiate spy object based on function passed in
		let mySpy = sinon.spy(submittedSolution);

		mySpy(2, 4);  // method call
		let spyCallA = mySpy.getCall(0); // spy on the very first method call
		expect(spyCallA.args).to.have.lengthOf(2); // .args gives the args in the first method call

		mySpy(2, 4, 6);  // method call
		let spyCallB = mySpy.getCall(1); // spy on the second method call
		expect(spyCallB.args).to.have.lengthOf(3); // .args gives the args in the second method call

		mySpy(2, 4, 6, 8);  // method call
		let spyCallC = mySpy.getCall(2); // spy on the third method call
		expect(spyCallC.args).to.have.lengthOf(4); // .args gives the args in the third method call
	})

  it("should return the product of all of the numbers that were passed in as arguments", function() {
    let submittedSolution = productOfAnyAmountOfNumbers(7,7,10);
    expect(submittedSolution, "the output does not reflect an accurate product").to.equal(490);
  })

  it("should pass auxillary test cases", function() {
    let submittedSolution = productOfAnyAmountOfNumbers;
    
    expect(submittedSolution(2,3)).to.equal(6);
    expect(submittedSolution(2,3,4)).to.equal(24);
    expect(submittedSolution(2,3,4,5)).to.equal(120);
    expect(submittedSolution(2,5,10)).to.equal(100);
    expect(submittedSolution(10,11,12,13,14,15)).to.equal(3603600);

    // test case using random numbers
    let randomNumberA = Math.round(Math.random() * 10);
    let randomNumberB = Math.round(Math.random() * 10);
    let randomNumberC = Math.round(Math.random() * 10);

    expect(submittedSolution(randomNumberA, randomNumberB, randomNumberC)).to.equal(randomNumberA * randomNumberB * randomNumberC);
  })

})