const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let res = "";
  let arr = [];
  //members.sort();
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string" && /^[a-zA-Z _]+$/.test(members[i])) {
      if (members[i].slice(0, 1) == " ") {
        for (let j = 0; j < members[i].length; j++) {
          if (members[i].slice(j, j + 1) !== " ") {
            arr.push(members[i].slice(j, j + 1).toUpperCase());
            break;
          }
        }
      } else {
        arr.push(members[i].slice(0, 1).toUpperCase());
      }
    }
  }
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
};
