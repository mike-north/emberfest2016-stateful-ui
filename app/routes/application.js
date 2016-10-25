import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  'draftwatch': inject.service(),

  // Modern browsers won't display this for security/scamming reasons,
  //  but IE8-10 will show it
  confirmMessage: `You have unsaved drafts which will be lost if you leave.
Are you sure?`,

  activate() {
    this._super(...arguments);
    window.onbeforeunload = this._onBeforeUnload.bind(this);
  },

  _onBeforeUnload() {
    if (this.get('draftwatch.hasImportantDrafts')) {
      // Seems that the important thing to do here is to return
      //  a value only if we wish to pop up the "Are you really sure?"
      return this.get('confirmMessage');
    }
  }
});