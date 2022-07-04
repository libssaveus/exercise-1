// Time complexity ~O(n)
// Space complexity ~O(n)
function doubleCharsInWords(words: string[]): number {
  return words
  .map(word => word.toLowerCase())
  .filter(word => [...new Set(word)].length !== word.length)
  .length;
}
