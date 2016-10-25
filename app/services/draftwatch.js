import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const {
  Service,
  inject,
  computed
} = Ember;

export default Service.extend({
  store: inject.service(),

  // ember-data record types to check
  recordTypesToCheck: {
    // for each record type to check, state types to check
    post: {
      // for each state type, properties to check (for emptiness)
      'post-info': ['body']
    }
  },

  /**
   * Check to see if a given state's property is to be considered "dirty"
   * For contextual usefulness, also give access to the name of the record
   * type, the state name, and the property key on the state object
   *
   * @private
   */
  _isStatePropertyDirty(recordType, stateType, propKey, propValue) {
    return !!propValue;
  },

  /**
   * Hacky way of using public APIs only to get access to the WeakMap
   * for a given state name. Can't create CPs on Ember.Object.create anymore
   *
   * @private
   */
  _weakMapForState(stateName) {
    let cachedSource = this.get(`_weakMapsForStates.${stateName}`);
    if (cachedSource) {
      return cachedSource;
    } else {
      // jscs:disable disallowDirectPropertyAccess
      let newSource = Ember.Object.extend({
        // jscs:enable disallowDirectPropertyAccess
        recordStateMap: stateFor(stateName)
      }).create().get('recordStateMap');
      this.set(`_weakMapsForStates.${stateName}`, newSource);
      return newSource;
    }
  },
  _weakMapsForStates: {},

  _statesForRecords(weakmap, records) {
    return records.map((r) => weakmap.get(r));
  },

  /**
   * A boolean (volatile) CP that tells us if any of our "important"
   * properties on certain states, for certain ember-data records are
   * non-empty
   *
   * @public
   */
  hasImportantDrafts: computed(function() {
    // Get all of the record types to check ( ['post'] )
    let recordTypesToCheck = this.get('recordTypesToCheck');
    // Iterate over them
    for (let typ in recordTypesToCheck) { // typ = 'post'
      // Get all of the loaded records of this type
      let records = this.get('store').peekAll(typ);
      // Get names of all of the states we're interested in checking
      for (let stateName in recordTypesToCheck[typ]) {
        // Get the weakmap for this state
        let recordStateMap = this._weakMapForState(stateName);
        // Transform the array of records to the corresponding array
        //   of states.
        let stateObjects = this._statesForRecords(recordStateMap, records);
        // Iterate over all state objects for this record
        for (let i = 0; i < stateObjects.length; i++) {
          let stateObj = stateObjects[i];
          // Iterate over all property keys we consider "important" on this state
          let statePropNames = recordTypesToCheck[typ][stateName];
          for (let j = 0; j < statePropNames.length; j++) {
            let statePropKey = statePropNames[j];
            // Finally, get the value of this state's property
            let statePropValue = stateObj.get(statePropKey);
            // Check to see if it's "dirty" or not
            if (this._isStatePropertyDirty(typ, stateName, statePropKey, statePropValue)) {
              // ...and early terminate this check as soon as we find anything
              return true;
            }
          }
        }
      }
    }
  }).volatile()
});