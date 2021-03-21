const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!str instanceof String) {
    str = str.toString();
  }
  let res = "";
  if (options.repeatTimes !== undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
      res += str;
      if (options.additionRepeatTimes !== undefined) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (options.addition !== undefined) {
            if (!options.addition instanceof String) {
              options.addition = options.addition.toString();
            }
            res += options.addition;
            if (options.additionSeparator === undefined) {
              options.additionSeparator = "|";
            }
            if (j !== options.additionRepeatTimes - 1) {
              res += options.additionSeparator;
            }
          }
        }
      } else {
        if (options.addition !== undefined) {
          if (!options.addition instanceof String) {
            options.addition = options.addition.toString();
          }
          res += options.addition;
        }
      }
      if (options.separator === undefined) {
        options.separator = "+";
      }
      if (i !== options.repeatTimes - 1) {
        res += options.separator;
      }
    }
  } else {
    res += str;
    if (options.additionRepeatTimes !== undefined) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (options.addition !== undefined) {
          if (!options.addition instanceof String) {
            options.addition = options.addition.toString();
          }
          res += options.addition;
          if (options.additionSeparator === undefined) {
            options.additionSeparator = "|";
          }
          if (j !== options.additionRepeatTimes - 1) {
            res += options.additionSeparator;
          }
        }
      }
    } else {
      if (options.addition !== undefined) {
        if (!options.addition instanceof String) {
          options.addition = options.addition.toString();
        }
        res += options.addition;
      }
    }
  }

  return res;
};
