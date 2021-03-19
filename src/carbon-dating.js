const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    parseFloat(sampleActivity) > 15 ||
    parseFloat(sampleActivity) <= 0 ||
    !/^[0-9.]+$/.test(sampleActivity)
  ) {
    return false;
  } else {
    return Math.ceil(
      (Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / Math.log(2)) *
        HALF_LIFE_PERIOD
    );
  }
};
