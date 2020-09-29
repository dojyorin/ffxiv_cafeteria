(()=>{
    function getComponent(doc, tag){
        const block = new RegExp(`<${tag}.*?>.*</${tag}>`, "igs");

        return doc.trim().match(block)?.[0]?.trim() ?? "";
    }

    function getContent(doc, tag){
        const start = new RegExp(`^<${tag}.*?>`, "is");
        const end = new RegExp(`</${tag}>$`, "is");

        return doc.trim().replace(start, "").replace(end, "").trim();
    }

    Object.defineProperty(globalThis, "$vueLoader", {
        writable: false,
        configurable: false,
        enumerable: false,
        async value(path){
            const response = await $httpGet(path, "text");

            const template = getComponent(response, "template");
            const templateBody = getContent(template, "template");

            const script = getComponent(response, "script");
            const scriptBody = getContent(script, "script");

            const style = getComponent(response, "style");
            const styleBody = getContent(style, "style");

            let templateScoped = "";
            let styleScoped = "";

            if(/^<style\s.*?scoped/i.test(style)){
                const random = crypto.getRandomValues(new Uint8Array(4));
                const scope = `data-v-${Array.from(random).map(byte => byte.toString(16)).join("")}`;

                const selectors = Array.from(new Set(styleBody.match(/\.[a-zA-Z_][a-zA-Z0-9_\-]*/ig)));

                templateScoped = template.replace(/<[a-zA-Z0-9_\-]+?\s.*?class=".*?"/ig, `$& ${scope}`);
                styleScoped = selectors.reduce((temp, selector) => temp.replace(new RegExp(selector, "ig"), `${selector}[${scope}]`), styleBody);
            }

            const css = document.createElement("style");
            css.innerText = styleScoped || styleBody;
            document.head.appendChild(css);

            return {
                template: templateScoped || templateBody,
                extends: new Function(scriptBody)() || {}
            };
        }
    });
})();