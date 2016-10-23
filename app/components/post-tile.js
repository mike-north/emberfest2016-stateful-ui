import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['post-tile'],
  draft: stateFor('post-draft', 'model'),
  emptyDraft: computed.empty('draft.reply'),
  actions: {
    draftIndicatorClicked(evt) {
      this.get('draft').set('reply', '');
      evt.preventDefault();
    }
  }
});
