import getNestedObject from '../getNestedObject';

test('should be Object after calling function', () => {
    expect(typeof getNestedObject('')).toBe('object');
});

test('should be Object from valid string', () => {
    const value = getNestedObject('a.b.c.d');

    expect(value).toEqual({ a: { b: { c: { d: null } } } });
});
