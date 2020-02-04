const polyfillObjectCreate = require('../polyfill');

test('should return Object with prototype Object', () => {
    const newObject = polyfillObjectCreate(Object.prototype);

    expect(Object.getPrototypeOf(newObject)).toBe(Object.prototype);
});

test('change link after calling Object.create', () => {
    const obj = { key: 'value' };
    const newObject = polyfillObjectCreate(obj.prototype);

    expect(newObject === obj).toBeFalsy();
});
