import unixDate from "./unix_date.mjs";

const list = [
    unixDate
];

const plugins = {
    install(Vue){
        for(const plugin of list){
            Vue.prototype[`$${plugin.name}`] = plugin;
        }
    }
};

export default plugins;