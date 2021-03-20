const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr instanceof Array) {
    throw Error;
  }
  let res = [];
  let isDiscarded = false;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next": {
        if (arr[i + 1] !== undefined) {
          i++;
          isDiscarded = true;
        }
        break;
      }
      case "--discard-prev": {
        if (arr[i - 1] !== undefined && !isDiscarded) {
          res.pop();
        }
        break;
      }
      case "--double-next": {
        if (arr[i + 1] !== undefined) {
          res.push(arr[i + 1]);
        }
        break;
      }
      case "--double-prev": {
        if (arr[i - 1] !== undefined && !isDiscarded) {
          res.push(arr[i - 1]);
        }
        break;
      }
      default: {
        isDiscarded = false;
        res.push(arr[i]);
        break;
      }
    }
  }
  return res;
};
