import unixDate from "./unix_date.mjs";

const plugins = [
    unixDate
];

export default {
    install(ctx){
        for(const plugin of plugins){
            ctx.prototype[`$$${plugin.name}`] = plugin;
        }
    }
};