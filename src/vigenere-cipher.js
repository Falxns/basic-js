const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  isStraight = 0;
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(bool) {
    if (bool === undefined || bool) {
      this.isStraight = 1;
    } else {
      this.isStraight = 0;
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase().split("");
    let res = "";
    key = key
      .repeat(Math.ceil(message.length / key.length))
      .slice(0, message.length)
      .toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        let arr = key.slice(0, i) + " " + key.slice(i, message.length);
        key = arr;
      }
    }
    key = key.split("");
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) !== -1) {
        res += this.alphabet[
          (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[i])) %
            26
        ];
      } else {
        res += message[i];
      }
    }
    if (this.isStraight) {
      return res;
    } else {
      return res.split("").reverse().join("");
    }
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase().split("");
    let res = "";
    key = key
      .repeat(Math.ceil(message.length / key.length))
      .slice(0, message.length)
      .toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        let arr = key.slice(0, i) + " " + key.slice(i, message.length);
        key = arr;
      }
    }
    key = key.split("");
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) !== -1) {
        res += this.alphabet[
          (this.alphabet.indexOf(message[i]) -
            this.alphabet.indexOf(key[i]) +
            26) %
            26
        ];
      } else {
        res += message[i];
      }
    }
    if (this.isStraight) {
      return res;
    } else {
      return res.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
