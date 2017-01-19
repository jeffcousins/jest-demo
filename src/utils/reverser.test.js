import reverser from './reverser';

test('should reverse a string', () => {
  expect(reverser('hello')).toBe(`Original: hello
Reversed: olleh`);
});
