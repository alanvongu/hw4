function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

function Palindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word.toLowerCase() === reversed.toLowerCase();
}

const word = prompt("Enter a word:");

const numVowels = countVowels(word);
const Pal = Palindrome(word);

console.log(`${word} contains ${numVowels} vowels`);
console.log(`${word} is ${Pal ? '' : 'not '}a palindrome`);