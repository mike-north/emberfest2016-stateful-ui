import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    saveComment(post, commentBody) {
      this.store.createRecord('comment', {
        post,
        body: commentBody
      }).save().then(() => {
        // delete the draft so we're clean again
        stateFor('post-info') // WeakMap for all post-infos
          .get(post) // post-info for the post we commented on
          .set('body', ''); // set the draft comment back to ''
      });
    }
  }
});
