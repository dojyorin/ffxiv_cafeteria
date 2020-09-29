import index from "./index.mjs";
import main from "./main.mjs";

const routes = [
    index,
    main
];

export default {
    routes: routes.flatMap(({parent, paths})=>{
        return Object.entries(paths).map(([route, resource])=>{
            return {
                path: parent.route + route,
                component: ()=> $vueLoader(parent.resource + resource)
            };
        });
    })
};