import { moduleForModel, test } from 'ember-qunit';

moduleForModel('post', 'Unit | Serializer | application', {
  // Specify the other units that are required for this test.
  needs: ['serializer:application', 'model:comment']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
