import Ember from 'ember';

export function eq([first, second]/*, hash*/) {
  return ('' + first) === ('' + second);
}

export default Ember.Helper.helper(eq);
