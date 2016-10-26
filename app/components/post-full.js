import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-full'],
  postInfo: stateFor('post-info', 'model'),
  actions: {
    deleteComment(commentRecord) {
      commentRecord.destroyRecord();
    },
    persistCommentDraft() {
      let commentBody = this.get('postInfo.body');
      let post = this.get('model');
      this.attrs['save-comment'](post, commentBody);
    }
  }
});
