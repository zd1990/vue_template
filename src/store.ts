import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface BodySizeIf {
  totalHeight: number;
  headerHeight: number;
  bodyHeight: number;
  totalWidth: number;
}

const documentHeight: number = document.documentElement.clientHeight;

const bodySizeObj: BodySizeIf = {
  totalHeight: documentHeight,
  headerHeight: 60,
  bodyHeight: documentHeight - 60,
  totalWidth: document.documentElement.clientWidth,
};

export default new Vuex.Store({
  state: {
    bodySizeObjStat: bodySizeObj,
  },
  mutations: {
    changeTotalHeight(state, n) {
      Vue.set(state.bodySizeObjStat, 'totalHeight', n);
      Vue.set(state.bodySizeObjStat, 'bodyHeight', n - state.bodySizeObjStat.headerHeight);
    },
  },
  actions: {

  },
});
