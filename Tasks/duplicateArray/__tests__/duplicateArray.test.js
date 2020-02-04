/* eslint-disable no-unused-vars */
const duplicateArray = require('../duplicateArray');

test('should be return array after calling method', () => {
    const arr = [1, 2, 3].duplicate();

    expect(Array.isArray(arr)).toBeTruthy();
});

test('should be duplicate array after calling new method', () => {
    const arr = [1, 2, 3];

    expect(arr.duplicate()).toEqual([1, 2, 3, 1, 2, 3]);
});
