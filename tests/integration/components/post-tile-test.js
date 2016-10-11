import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

moduleForComponent('post-tile', 'Integration | Component | post tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    title: 'tile title',
    authorName: 'tile author',
    body: 'tile body',
    createdAt: moment('01-10-2016', 'DD-MM-YYYY').toISOString(),
    updatedAt: moment('03-10-2016', 'DD-MM-YYYY').toISOString()
  });

  this.render(hbs`{{post-tile model=model}}`);

  assert.equal(this.$('.author-name').text().trim(), 'tile author');
  assert.equal(this.$('.created-at').text().trim(), 'October 1, 2016');
  assert.equal(this.$('.post-tease').text().trim(), 'tile body...');
});
