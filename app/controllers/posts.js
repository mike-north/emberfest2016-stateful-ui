import Ember from 'ember';

const { Controller, run: { debounce } } = Ember;

export default Controller.extend({
  _triggerPageRefresh() {
    this.send('pageRefresh');
  },
  actions: {
    queuePageRefresh() {
      debounce(this, '_triggerPageRefresh', 300);
    }
  }
});
