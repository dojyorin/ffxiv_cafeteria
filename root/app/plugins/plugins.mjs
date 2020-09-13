import saveFile from "./save_file.mjs";
import imageLoader from "./image_loader.mjs";

const list = [
    saveFile,
    imageLoader
];

const plugins = {
    install(Vue){
        for(const plugin of list){
            Vue.prototype[`$${plugin.name}`] = plugin;
        }
    }
};

export default plugins;