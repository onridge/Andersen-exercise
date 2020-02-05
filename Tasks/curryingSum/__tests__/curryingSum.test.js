const curryingSum = require('../curryingSum');

test('should be 11 after calling function', () => {
    expect(curryingSum(1)(2)(3) + 5).toBe(11);
});

test('should be return Number after calling function', () => {
    const sum = curryingSum(1)(2)(3) + 5;

    expect(typeof sum).toBe('number');
});
