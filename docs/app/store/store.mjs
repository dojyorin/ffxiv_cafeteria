import {namespaced, state, getters, mutations, actions} from "./index.mjs";
import cafes from "./cafes.mjs";

export default {
    namespaced,
    state,
    getters,
    mutations,
    actions,

    modules: {
        cafes
    }
};