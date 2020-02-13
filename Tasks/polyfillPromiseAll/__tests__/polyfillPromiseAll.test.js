import polyfillPromiseAll from '../polyfillPromiseAll';

const getPromise = (value) => new Promise((resolve) => resolve(`Resolve_${value}`));
const getDelayedPromise = (value) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolve_${value}`);
        }, 3000);
    });
const promise1 = getPromise('first');
const promise2 = getDelayedPromise('second');
const promise3 = getPromise('third');

test('should return all promises', () => {
    expect(polyfillPromiseAll([promise1, promise2])).resolves.toStrictEqual(['Resolve_first', 'Resolve_second']);
});

test('should return error', () => {
    try {
        const rejectedPromise = new Promise((resolve, reject) => reject('error'));

        polyfillPromiseAll([promise1, promise2, rejectedPromise]);
    } catch (e) {
        expect(e).toEqual('error');
    }
});

test('should return empty array if args is empty', () => {
    expect(polyfillPromiseAll()).resolves.toStrictEqual([]);
});

test('should return empty array', () => {
    expect(polyfillPromiseAll([])).resolves.toEqual({});
});

test('should return all promises', () => {
    expect(polyfillPromiseAll([promise1, promise2, promise3])).resolves.toStrictEqual([
        'Resolve_first',
        'Resolve_second',
        'Resolve_third',
    ]);
});
