module.exports = function reverse(n) {
  let result = Math.abs(n);

  return parseInt(
    result
    .toString()
    .split("")
    .reverse()
    .join("")
  );
};