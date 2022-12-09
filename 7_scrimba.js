/* Alternating Caps 
Write a function that takes in a string of letters
and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

const altCaps2 = (str) =>
  [...str].reduce((acc, letter, index) =>
    index % 2 === 0
      ? (acc += letter.toUpperCase())
      : (acc += letter.toLowerCase())
  );

console.log(
  altCaps2("When you visit Portland you have to go to VooDoo Donuts")
);
