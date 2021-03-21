const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth) {
    if (!depth) {
      depth = 0;
    }
    if (arr.length === 0) {
      depth++;
      return depth;
    } else {
      depth++;
      let array = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
          array.push(this.calculateDepth(arr[i], depth));
        }
      }
      if (depth < Math.max(...array)) {
        return Math.max(...array);
      } else {
        return depth;
      }
    }
  }
};
