import pick from '../pick';

test('should return object', () => {
    expect(pick(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 })).toEqual({ a: 1, d: 4 });
});

test('should return empty object after calling function with empty object', () => {
    expect(pick(['a', 'd'], {})).toEqual({});
});

test('should return empty object after calling function with empty array', () => {
    expect(pick([], { a: 1, b: 2, c: 3, d: 4 })).toEqual({});
});

test('should return empty object after calling function without second arguments', () => {
    expect(pick([])).toEqual({});
});
