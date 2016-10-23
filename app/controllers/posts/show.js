import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveComment(commentBody) {
      return this.store.createRecord('comment', {
        post: this.get('model'),
        body: commentBody
      }).save();
    }
  },
});
