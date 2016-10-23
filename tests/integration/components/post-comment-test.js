import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

moduleForComponent('post-comment', 'Integration | Component | post comment', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('comment', {
    body: 'This is a comment',
    updatedAt: moment().subtract(1, 'd').toISOString()
  });

  this.render(hbs`{{post-comment model=comment}}`);

  assert.equal(this.$('.comment-body').text().trim(), 'This is a comment');
  assert.equal(this.$('.posted-at').text().trim(), 'a day ago');
});
