import {namespaced, state, getters, mutations, actions} from "./index.mjs";
import main from "./main.mjs";

export default {
    namespaced,
    state,
    getters,
    mutations,
    actions,

    modules: {
        main
    }
};