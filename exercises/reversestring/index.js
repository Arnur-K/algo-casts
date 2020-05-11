// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => Array.from(str).reduce((rev, char) => char + rev, '');

// const reverse = (str) => Array.from(str).reverse().join('');

// const reverse = (str) => str.split('').reverse().join('');

// const reverse = (str) => {
//   let reversed = '';

//   for (const char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// };

module.exports = reverse;
