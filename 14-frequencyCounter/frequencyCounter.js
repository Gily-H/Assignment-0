function frequencyCounter(word) {
  let freqTracker = {};

  for (const letter of word) {

    // if letter already present, increment frequency, else add new letter with freq 1
    freqTracker.hasOwnProperty(letter) ? freqTracker[letter]++ : freqTracker[letter] = 1;
    console.log(freqTracker);
  }

  return freqTracker;
}

// Do not edit this line;
module.exports = frequencyCounter;