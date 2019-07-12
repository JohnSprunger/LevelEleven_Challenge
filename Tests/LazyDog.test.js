const removeChars = require('../LazyBrownDog');

test('abcdefghijklmnopqrstuvwxyz -> ""', () => {
  expect(removeChars("abcdefghijklmnopqrstuvwxyz")).toBe("");
});

test('The quick brown fox jumps over the lazy dog -> ""', () => {
  expect(removeChars("The quick brown fox jumps over the lazy dog")).toBe("");
});

test('"" -> abcdefghijklmnopqrstuvwxyz', () => {
  expect(removeChars("")).toBe("abcdefghijklmnopqrstuvwxyz");
});

test('TeST -> "abcdfghijklmnopqruvwxyz"', () => {
  expect(removeChars("TeST")).toBe("abcdfghijklmnopqruvwxyz");
});

test('hell0 -> "abcdfgijkmnopqrstuvwxyz"', () => {
  expect(removeChars("hell0")).toBe("abcdfgijkmnopqrstuvwxyz");
});