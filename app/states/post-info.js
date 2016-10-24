import Ember from 'ember';

// jscs:disable disallowDirectPropertyAccess
const PostInfoState = Ember.Object.extend({});
// jscs:enable disallowDirectPropertyAccess

PostInfoState.reopenClass({
  initializeState(/*instance*/) {
    return {
      body: ''
    };
  }
});

export default PostInfoState;