const test = require('node:test');
const assert = require('node:assert/strict');

const { add } = require('./index');

test('add sums numbers', () => {
  assert.equal(add(2, 3), 5);
});
