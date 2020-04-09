import luhnAlgorithm from '../luhnAlgorithm';

it('should be return true if card valid', () => {
    expect(luhnAlgorithm('5432115194685353')).toBeTruthy();
});

it('should be return false if not valid card', () => {
    expect(luhnAlgorithm('1234567891011121')).toBeFalsy();
});

it('should be return true if card valid Visa', () => {
  expect(luhnAlgorithm('4293172636234952')).toBeTruthy();
});

it('should be return true if card valid MasterCard', () => {
  expect(luhnAlgorithm('5370687283041668')).toBeTruthy();
});
