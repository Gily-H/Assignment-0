// This file is only for viewing;

const greetFriend = require("./greetFriend");
const { expect } = require("chai");
const faker = require("faker");
const moment = require("moment");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

describe("the greetFriend(name) function", function() {

  it("should return a string", function() {
    let submittedSolution = greetFriend("Luke");
    expect(submittedSolution, "the output is not a string").to.be.a("string");
  })

  it("should return a proper greeting adhering to this format: 'Hello, insertValueOfNameHere!", function() {
    let submittedSolution = greetFriend("Mark");
    expect(submittedSolution).to.equal("Hello, Mark!");
  })

  it("should pass all twenty randomized test cases", function() {
    for (let i = 0; i < 20; i++) {
      let randomName = faker.name.findName();
      let submittedSolution = greetFriend(randomName);
      expect(submittedSolution).to.equal(`Hello, ${randomName}!`);
    }
  })

  // experiment adding a new unit test
  it("should not contain extra whitespace around the name", function() {
    let names = ["Gilman", "Jenny   ", "   Henry", "  Maggie  "]
    expect(greetFriend(names[0])).to.equal("Hello, Gilman!")
    expect(greetFriend(names[1])).to.equal("Hello, Jenny!")
    expect(greetFriend(names[2])).to.equal("Hello, Henry!")
    expect(greetFriend(names[3])).to.equal("Hello, Maggie!")
  })

})