const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
  getLength() {
    return this.chain.length;
    
  },
  addLink(value) {
      if(value == 'string') return this.chain.push(value);
  },
  removeLink(position) {
    if(Number.isInteger(position)) {
      return this.chain.splice(position - 1, 1);
    }
    else throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    return this.chain.reverse();
  },
  finishChain() {
  
  }
};
// need to fix

module.exports = {
  chainMaker
};
