import mod10 from '../mod10';

it('should be return number if first number less than second number', () => {
    expect(mod10('3', '5')).toBe(8);
});

it('should be return number', () => {
    expect(mod10('7', '4')).toBe(3);
});
