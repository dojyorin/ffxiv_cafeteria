import index from "./index.mjs";
import main from "./main.mjs";

const list = [
    index,
    main
];

const routes = list.flatMap(({parents, routes})=>{
    return Object.entries(routes ?? {}).map(([route, resource])=>{
        return {
            path: (parents?.route ?? "") + route,
            component: ()=> $vueLoader((parents?.resource ?? "") + resource)
        };
    });
});

export default {
    routes
};