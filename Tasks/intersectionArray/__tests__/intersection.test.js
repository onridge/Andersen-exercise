import intersection from '../intersection';

test('should be an array with same elements', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];

    expect(intersection(arr1, arr2)).toEqual([3, 4, 5]);
});

test('should be return array after calling function', () => {
    const arr1 = ['a', 'b', 'c', 'd'];
    const arr2 = ['q', 'w', 'e', 'd', 'a'];
    const result = intersection(arr1, arr2);

    expect(Array.isArray(result)).toBeTruthy();
});
