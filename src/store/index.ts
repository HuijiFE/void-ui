import Vue from 'vue';
import Vuex from 'vuex';

import personName, { StatePersonName } from './modules/personName';
import domGhost, { StateDomGhost } from './modules/domGhost';

Vue.use(Vuex);

export interface StateRoot {
  personName: StatePersonName;
  domGhost: StateDomGhost;
}

export default new Vuex.Store<StateRoot>({
  modules: {
    personName,
    domGhost,
  },
});
