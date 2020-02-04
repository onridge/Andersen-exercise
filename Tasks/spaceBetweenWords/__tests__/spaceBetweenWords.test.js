const spaceBetweenWords = require('../spaceBetweenWords');

test('should be added space between word', () => {
    expect(spaceBetweenWords('hello world')).toBe('h e l l o  w o r l d');
});

test('should be return string after calling function', () => {
    const result = spaceBetweenWords('Personal Computer');

    expect(result).toBe('P e r s o n a l  C o m p u t e r');
    expect(typeof result).toBe('string');
});
