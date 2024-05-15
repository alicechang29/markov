/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  //TODO: use a map here (check the map api)
  getChains() {

    const chains = {};

    for (let i = 0; i < this.words.length; i++) {

      if (!(this.words[i] in chains)) {
        chains[this.words[i]] = [];
      }

      // TODO: use || operator to get result of determining subpart
      if (this.words[i + 1] !== undefined) {
        chains[this.words[i]].push(this.words[i + 1]);

      } else {
        chains[this.words[i]].push(null);
      }

    }

    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null


    // accessing first array of first key in object
    //randomly pick a value
    // go to the chains[value]
    //randomly pick a value
    // do until chains[value] selected is null

    let currWord = this.words[0];

    let text = currWord;

    while (currWord !== null) {
      currWord = this.getRandomWord(this.chains[currWord]);

      if (currWord === null) {
        break;
      }

      text += ` ${currWord}`;
    }
    return text;

  }

  getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
  }
}


export { MarkovMachine };