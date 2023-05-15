import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const DEMO_STORE = 'demo';
const factory = () => {
  return {
    state() {
      return { list: [] };
    },

    getters: { ...getters },

    mutations: { ...mutations },

    actions: { ...actions },
  };
};

const config = { namespace: DEMO_STORE };

export default {
  specifics: factory(),
  config
};
