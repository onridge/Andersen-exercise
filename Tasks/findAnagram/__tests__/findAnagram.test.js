import findAnagram from '../findAnagram';

test('should be true after enter 2 valid words', () => {
    expect(findAnagram('вертикаль', 'кильватер')).toBeTruthy();
});

test('should be return true after calling function', () => {
    const result = findAnagram('апельсин', 'спаниель');

    expect(typeof result).toBe('boolean');
});
