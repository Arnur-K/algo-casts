// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let maxChar = 0;
  let maxVal = 0;

  for (const char of str) {
    charMap[char] = charMap[char]++ || 1;
  }

  for (const char in charMap) {
    if (charMap[char] > maxVal) {
      maxVal = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
