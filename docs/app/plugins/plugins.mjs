import unixDate from "./unix_date.mjs";

const list = [
    unixDate
];

function install(ctx){
    for(const plugin of list){
        ctx.prototype[`$$${plugin.name}`] = plugin;
    }
}

export default {
    install
};