function countOccurrences(text) {
  const words = text.split(" "); 
  const wordMap = new Map();

  for (const word of words) {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, ""); 
    if (cleanWord) {
      wordMap.set(cleanWord, (wordMap.get(cleanWord) || 0) + 1);
    }
  }

  return wordMap;
}

const text = "This is a test. This test is simple.";
console.log(countOccurrences(text));
