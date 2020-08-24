const slugGenerator = require('./index');

test('expect helo word equal hello-world', () => {
  expect(slugGenerator('hello world')).toBe('hello-world');
});

test('expect helo word not equal hello-world', () => {
  expect(slugGenerator('hello world',true)).not.toBe('hello-world');
});

test('expect helo word equal length 17 ', () => {
  expect(slugGenerator('hello world',true,5).length).toBe(17);
});