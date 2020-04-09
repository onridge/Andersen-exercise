import encryptCvc from '../encryptCvc';

it('should be return number', () => {
    expect(encryptCvc('327', '286')).toBe('141');
});
