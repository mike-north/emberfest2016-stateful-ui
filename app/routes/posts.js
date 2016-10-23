import Ember from 'ember';

export default Ember.Route.extend({
  
  queryParams: {
    query: { replace: true, as: 'q' }
  },
  
  actions: {
    refreshListData(query) {
      this.refresh();
    }
  },
  
  model({'query': q}) {
    if (q) {
      return this.store.query('post', {
        search: q
      });
    } else {
      return this.store.findAll('post');
    }
  }

});
