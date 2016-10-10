import Ember from 'ember';

export function tease([str], hash) {
  let len = (hash || {}).chars || 100;
  return ('' + (str || '')).replace(/[\#*]+/g, '').substring(0, len);
}

export default Ember.Helper.helper(tease);
