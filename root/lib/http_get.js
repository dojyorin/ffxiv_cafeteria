(()=>{
    Object.defineProperty(globalThis, "$httpGet", {
        writable: false,
        configurable: false,
        enumerable: false,
        async value(path, type){
            return (await fetch(path, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credential: "omit",
                referrerPolicy: "no-referrer",
                redirect: "follow",
                keepalive: false,
                referrer: "",
                integrity: "",
                headers: {},
                body: null
            }))[type]();
        }
    });
})();