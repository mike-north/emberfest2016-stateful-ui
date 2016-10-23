import Ember from 'ember';

const { Helper: { helper } } = Ember;

export function titlecase([str]/*, hash*/) {
  return str[0].toUpperCase() + str.substring(1);
}

export default helper(titlecase);
