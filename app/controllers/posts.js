import Ember from 'ember';

export default Ember.Controller.extend({
  _refreshListData() {
    this.send('refreshListData');
  },
  actions: {
    scheduleListRefresh() {
      Ember.run.debounce(this, '_refreshListData', 300);
    }
  }
});
