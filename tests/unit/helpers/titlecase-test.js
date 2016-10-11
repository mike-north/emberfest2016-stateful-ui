import { titlecase } from 'statetalk/helpers/titlecase';
import { module, test } from 'qunit';

module('Unit | Helper | titlecase');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = titlecase(['testing this thing']);
  assert.equal(result, 'Testing this thing');
});
