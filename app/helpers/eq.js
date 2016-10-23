import Ember from 'ember';

const { Helper: { helper } } = Ember;

export function eq([first, second]/*, hash*/) {
  return `${first}` === `${second}`;
}

export default helper(eq);
