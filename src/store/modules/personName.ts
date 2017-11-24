import { Module } from 'vuex';

import { StateRoot } from '../index';

export interface StatePersonName {
  firstName: string;
  lastName: string;
}

export enum TypesPersonName {
  updateFirstName = 'updateFirstName',
  updateLastName = 'updateLastName',
}

const personName: Module<StatePersonName, StateRoot> = {
  state: {
    firstName: 'Xiaodong',
    lastName: 'Zhang',
  },
  getters: {
    fullName: (state): string => `${state.firstName} ${state.lastName}`,
  },
  mutations: {
    [TypesPersonName.updateFirstName](state, newValue: string) {
      state.firstName = newValue;
    },
    [TypesPersonName.updateFirstName](state, newValue: string) {
      state.lastName = newValue;
    },
  },
  actions: {
    updateFirstName({ commit }, newValue: string) {
      commit(TypesPersonName.updateFirstName, newValue);
    },
    updateLastName({ commit }, newValue: string) {
      commit(TypesPersonName.updateLastName, newValue);
    },
  },
};

export default personName;
