import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    search: {
      as: 's',
      replace: true
    }
  },
  actions: {
    pageRefresh() {
      this.refresh();
    }
  },
  model({ search }) {
    if (!search) {
      return this.store.findAll('post');
    } else {
      return this.store.query('post', { search });
    }
  }
});
