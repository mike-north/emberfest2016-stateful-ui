import Ember from 'ember';

export function titlecase([str]/*, hash*/) {
  return str[0].toUpperCase() + str.substring(1);
}

export default Ember.Helper.helper(titlecase);
