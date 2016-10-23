import Ember from 'ember';

const MyStateObject = Ember.Object.extend();

MyStateObject.reopenClass({
  initialState(instance) {
    return {
      reply: '',
      metadataOpen: false
    };
  }
});

export default MyStateObject;