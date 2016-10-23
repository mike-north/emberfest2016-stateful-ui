import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-full', 'Integration | Component | post full', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    authorName: 'Mike North',
    title: 'this is my title',
    createdAt: 'October 22, 2016 3:08 PM',
    updatedAt: 'October 22, 2016 3:08 PM',
    body: 'hello this is my body'
  });

  this.set('draft', {
    metadataOpen: true
  });

  this.render(hbs`{{post-full model=model draft=draft}}`);

  assert.equal(this.$('.post-title').text().trim(),
    'This is my title');
  assert.equal(this.$('.metadata-item.author .metadata-item-value').text().trim(),
    'Mike North');

  assert.equal(this.$('.metadata-item.created-at .metadata-item-value').text().trim(),
    'October 22, 2016 3:08 PM');
  assert.equal(this.$('.metadata-item.updated-at .metadata-item-value').text().trim(),
    '');
  assert.equal(this.$('.body').text().trim(),
    'hello this is my body');

});
