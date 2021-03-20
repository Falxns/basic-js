const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position >= this.chain.length) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = "";
    for (let i = 0; i < this.chain.length - 1; i++) {
      res += "( " + this.chain[i] + " )~~";
    }
    res += "( " + this.chain[this.chain.length - 1] + " )";
    this.chain = [];
    return res;
  },
};

module.exports = chainMaker;
