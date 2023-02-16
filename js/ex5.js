const words = [];

while (true) {
  const word = prompt("Enter a word or type 'stop' to end:");

  if (word === null) { /
    continue;
  }

  if (word.trim().toLowerCase() === 'stop') {
    break;
  }

  words.push(word);
}

if (words.length === 0) {
  console.log('No words to display, Stop was the first word entered.');
} else {
  console.log('You entered the following words:');
  for (const word of words) {
    console.log(word);
  }
}
