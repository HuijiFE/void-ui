import axios from 'axios';
import { Module } from 'vuex';

import { StateRoot } from '../index';

export interface StateDomGhost {
  status: 'loading' | 'success' | 'failure';
  routePath: string;
  ghostDocument: Document;
}

export enum TypesDomGhost {
  updateGhost = 'updateGhost',
}

const domGhost: Module<StateDomGhost, StateRoot> = {
  state: {
    status: 'loading',
    routePath: '',
    ghostDocument: document.implementation.createHTMLDocument(''),
  },
  mutations: {
    [TypesDomGhost.updateGhost](state, payload: { routePath: string }) {
      state.routePath = payload.routePath;
      let data = document.documentElement.innerHTML;
      state.ghostDocument.documentElement.innerHTML = data;
    },
  },
  actions: {
    async ghostGet({ state, commit }, payload: { routePath: string; container: any }) {
      if (state.routePath !== payload.routePath) {
        status = 'loading';
        state.routePath = payload.routePath;
        let response = await axios.get(payload.routePath);
        state.ghostDocument.documentElement.innerHTML = response.data;
      }

      if (payload.container) {
        Object.keys(payload.container).forEach(id => {
          let element = state.ghostDocument.getElementById(id);
          if (element) {
            payload.container[id] = element.innerHTML;
          }
        });
      }
      status = 'success';
    },
  },
};

export default domGhost;
