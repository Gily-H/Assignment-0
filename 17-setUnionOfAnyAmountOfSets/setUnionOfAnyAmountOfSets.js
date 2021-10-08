function setUnionOfAnyAmountOfSets(...args) {
  let unionSet = new Set();
  for (const set of args) {
    for (const number of set) {
      // 'Set' add() method will not add elements already in the set
      unionSet.add(number);
    }
  }

  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;