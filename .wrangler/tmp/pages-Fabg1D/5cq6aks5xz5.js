// <define:__ROUTES__>
var define_ROUTES_default = { version: 1, include: ["/*"], exclude: [] };

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/home/james/workspace/combat-connect/.wrangler/tmp/pages-Fabg1D/bundledWorker-0.6287978072267943.mjs";
export * from "/home/james/workspace/combat-connect/.wrangler/tmp/pages-Fabg1D/bundledWorker-0.6287978072267943.mjs";
import { isRoutingRuleMatch } from "/home/james/workspace/combat-connect/node_modules/wrangler/templates/pages-dev-util.ts";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=5cq6aks5xz5.js.map
