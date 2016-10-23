import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-full'],
  store: Ember.inject.service(),
  draft: stateFor('post-draft', 'model'),
  actions: {
    toggleMetadata(flag) {
      this.set('draft.metadataOpen', flag);
    },
    clearDraft() {
      this.set('draft.reply', '');
    },
    saveComment() {
      let x = this.attrs.saveComment(this.get('draft.reply'))
        .then(() => {
          this.get('draft').set('reply', '');
        })
    },
    deleteComment(comment) {
      if (confirm('are you sure you want to remove this comment?')) {
        this.get('store').deleteRecord(comment);
        comment.save();
      }
    }
  }
});
