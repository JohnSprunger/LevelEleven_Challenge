const bracketBuster = require('../Bracketology');

test('"" is a balanced bracket', () => {
    expect(bracketBuster("")).toBe(true);
});

test('() is a balanced bracket', () => {
    expect(bracketBuster("()")).toBe(true);
});

test('(()) is a balanced bracket', () => {
    expect(bracketBuster("(())")).toBe(true);
});

test('hello() (world) is a balanced bracket', () => {
    expect(bracketBuster("hello() (world)")).toBe(true);
});

test('c[] reverse(c[] input) { ; } is a balanced bracket', () => {
    expect(bracketBuster("")).toBe(true);
});

test('[{]} is an ubalanced bracket', () => {
    expect(bracketBuster("[{]}")).toBe(false);
});

test('([{ () ])} is an ubalanced bracket', () => {
    expect(bracketBuster("([{ () ])}")).toBe(false);
});

test('([{ is an ubalanced bracket', () => {
    expect(bracketBuster("([{")).toBe(false);
});