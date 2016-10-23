import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return this.store.findRecord('post', id).then((post) => {
      return post.get('comments').then(() => {
        return post;
      });
    });
  }
});
