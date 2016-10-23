import PostState from '../state/post-draft';

export function initialize(appInstance) {
  appInstance.register('state:post-draft', PostState);
}

export default {
  name: 'setup-statefactories',
  initialize
};
