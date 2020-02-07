import fibbonacci from '../fibonacci';

test('should be return 55 after calling function', () => {
    expect(fibbonacci(10)).toBe(55);
});

test('should be return number after calling function', () => {
    const result = fibbonacci(7);

    expect(typeof result).toBe('number');
});
