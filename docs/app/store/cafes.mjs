export const namespaced = true;

export function state(){
    return {
        mana: [],
        gaia: [],
        elemental: []
    };
}

export const getters = {
    getCafes(state){
        return dc => state[dc];
    },

    getCafe(state){
        return (dc, query)=> state[dc].filter()
    }
};

export const mutations = {
    setCafe(state, payload){
        state[payload.dc].push(payload.cafe);
    }
};

export const actions = {
    async getCafes(ctx){
        for(const dc of ["mana", "gaia", "elemental"]){
            for(const cafe of await $httpGet(`./data/cafes/${dc}.json`, "json")){
                ctx.commit("setCafe", {
                    dc,
                    cafe
                });
            }
        }
    }
};

export default {
    namespaced,
    state,
    getters,
    mutations,
    actions
};