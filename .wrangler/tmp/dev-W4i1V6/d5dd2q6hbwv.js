// .wrangler/tmp/bundle-MHVmkR/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/pages-Lvigzl/bundledWorker-0.33775854944687933.mjs
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ENV_ALS_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  return envAsyncLocalStorage;
}).catch(() => null);
var ee = Object.create;
var j = Object.defineProperty;
var te = Object.getOwnPropertyDescriptor;
var se = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf;
var ae = Object.prototype.hasOwnProperty;
var O = (t, e) => () => (t && (e = t(t = 0)), e);
var q = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var ne = (t, e, r, s) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of se(e))
      !ae.call(t, a) && a !== r && j(t, a, { get: () => e[a], enumerable: !(s = te(e, a)) || s.enumerable });
  return t;
};
var A = (t, e, r) => (r = t != null ? ee(re(t)) : {}, ne(e || !t || !t.__esModule ? j(r, "default", { value: t, enumerable: true }) : r, t));
var p;
var u = O(() => {
  p = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/__index.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/$1.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }], filesystem: [{ src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/__index.prefetch.rsc$", dest: "/index.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }, { src: "^/(.+?).prefetch.rsc(?:/)?$", dest: "/$1.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|JY\\-qmeVWN89ZXz3KLxx0_)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*)$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" } }, framework: { version: "14.0.3" }, crons: [], flags: [] };
});
var f;
var l = O(() => {
  f = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/JY-qmeVWN89ZXz3KLxx0_/_buildManifest.js": { type: "static" }, "/_next/static/JY-qmeVWN89ZXz3KLxx0_/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/413-dd2d1e77cac135ea.js": { type: "static" }, "/_next/static/chunks/472-b67f79dbdd2c1fe1.js": { type: "static" }, "/_next/static/chunks/app/_not-found-21300f601eee6904.js": { type: "static" }, "/_next/static/chunks/app/layout-52ea520636857669.js": { type: "static" }, "/_next/static/chunks/app/page-d13f3453becdcd9e.js": { type: "static" }, "/_next/static/chunks/fd9d1056-7b52db27cfdaff1f.js": { type: "static" }, "/_next/static/chunks/framework-8883d1e9be70c3da.js": { type: "static" }, "/_next/static/chunks/main-6e13503ca67e10d8.js": { type: "static" }, "/_next/static/chunks/main-app-cebfc4219de6fb8f.js": { type: "static" }, "/_next/static/chunks/pages/_app-ee276fea40a4b191.js": { type: "static" }, "/_next/static/chunks/pages/_error-deeb844d2074b9d8.js": { type: "static" }, "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js": { type: "static" }, "/_next/static/chunks/webpack-3cdab055f1b2e9d9.js": { type: "static" }, "/_next/static/css/1c1f3ec6155bd7ac.css": { type: "static" }, "/_next/static/media/05a31a2ca4975f99-s.woff2": { type: "static" }, "/_next/static/media/513657b02c5c193f-s.woff2": { type: "static" }, "/_next/static/media/51ed15f9841b9f9d-s.woff2": { type: "static" }, "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2": { type: "static" }, "/_next/static/media/d6b16ce4a6175f26-s.woff2": { type: "static" }, "/_next/static/media/ec159349637c90ad-s.woff2": { type: "static" }, "/_next/static/media/fd4db3eb5472fc27-s.woff2": { type: "static" }, "/next.svg": { type: "static" }, "/vercel.svg": { type: "static" }, "/api/hello": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/hello.func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/favicon.ico": { type: "override", path: "/favicon.ico", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } } };
});
var $ = q((Le, I) => {
  "use strict";
  u();
  l();
  function R(t, e) {
    t = String(t || "").trim();
    let r = t, s, a = "";
    if (/^[^a-zA-Z\\\s]/.test(t)) {
      s = t[0];
      let o = t.lastIndexOf(s);
      a += t.substring(o + 1), t = t.substring(1, o);
    }
    let i = 0;
    return t = oe(t, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let h = o.substring(c[0].length, o.length - 1);
        return e && (e[i] = c[1]), i++, `(${h})`;
      }
      return o.substring(0, 3) === "(?:" || i++, o;
    }), t = t.replace(/\[:([^:]+):\]/g, (o, c) => R.characterClasses[c] || o), new R.PCRE(t, a, r, a, s);
  }
  function oe(t, e) {
    let r = 0, s = 0, a = false;
    for (let n = 0; n < t.length; n++) {
      let i = t[n];
      if (a) {
        a = false;
        continue;
      }
      switch (i) {
        case "(":
          s === 0 && (r = n), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let o = n + 1, c = r === 0 ? "" : t.substring(0, r), h = t.substring(o), d = String(e(t.substring(r, o)));
            t = c + d + h, n = r;
          }
          break;
        case "\\":
          a = true;
          break;
        default:
          break;
      }
    }
    return t;
  }
  (function(t) {
    class e extends RegExp {
      constructor(s, a, n, i, o) {
        super(s, a), this.pcrePattern = n, this.pcreFlags = i, this.delimiter = o;
      }
    }
    t.PCRE = e, t.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(R || (R = {}));
  R.prototype = R.PCRE.prototype;
  I.exports = R;
});
var Z = q((H) => {
  "use strict";
  u();
  l();
  H.parse = ge;
  H.serialize = ye;
  var me = Object.prototype.toString, k = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function ge(t, e) {
    if (typeof t != "string")
      throw new TypeError("argument str must be a string");
    for (var r = {}, s = e || {}, a = s.decode || Re, n = 0; n < t.length; ) {
      var i = t.indexOf("=", n);
      if (i === -1)
        break;
      var o = t.indexOf(";", n);
      if (o === -1)
        o = t.length;
      else if (o < i) {
        n = t.lastIndexOf(";", i - 1) + 1;
        continue;
      }
      var c = t.slice(n, i).trim();
      if (r[c] === void 0) {
        var h = t.slice(i + 1, o).trim();
        h.charCodeAt(0) === 34 && (h = h.slice(1, -1)), r[c] = ve(h, a);
      }
      n = o + 1;
    }
    return r;
  }
  function ye(t, e, r) {
    var s = r || {}, a = s.encode || we;
    if (typeof a != "function")
      throw new TypeError("option encode is invalid");
    if (!k.test(t))
      throw new TypeError("argument name is invalid");
    var n = a(e);
    if (n && !k.test(n))
      throw new TypeError("argument val is invalid");
    var i = t + "=" + n;
    if (s.maxAge != null) {
      var o = s.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError("option maxAge is invalid");
      i += "; Max-Age=" + Math.floor(o);
    }
    if (s.domain) {
      if (!k.test(s.domain))
        throw new TypeError("option domain is invalid");
      i += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!k.test(s.path))
        throw new TypeError("option path is invalid");
      i += "; Path=" + s.path;
    }
    if (s.expires) {
      var c = s.expires;
      if (!xe(c) || isNaN(c.valueOf()))
        throw new TypeError("option expires is invalid");
      i += "; Expires=" + c.toUTCString();
    }
    if (s.httpOnly && (i += "; HttpOnly"), s.secure && (i += "; Secure"), s.priority) {
      var h = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (h) {
        case "low":
          i += "; Priority=Low";
          break;
        case "medium":
          i += "; Priority=Medium";
          break;
        case "high":
          i += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var d = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (d) {
        case true:
          i += "; SameSite=Strict";
          break;
        case "lax":
          i += "; SameSite=Lax";
          break;
        case "strict":
          i += "; SameSite=Strict";
          break;
        case "none":
          i += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return i;
  }
  function Re(t) {
    return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
  }
  function we(t) {
    return encodeURIComponent(t);
  }
  function xe(t) {
    return me.call(t) === "[object Date]" || t instanceof Date;
  }
  function ve(t, e) {
    try {
      return e(t);
    } catch {
      return t;
    }
  }
});
u();
l();
u();
l();
u();
l();
var w = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
var N = /* @__PURE__ */ new Set();
var b = class {
  constructor(e = {}) {
    this.ctx = e;
  }
  tagsManifest;
  tagsManifestKey = "tags-manifest";
  async retrieve(e) {
    throw new Error(`Method not implemented - ${e}`);
  }
  async update(e, r) {
    throw new Error(`Method not implemented - ${e}, ${r}`);
  }
  async set(e, r) {
    let s = { lastModified: Date.now(), value: r };
    switch (await this.update(e, JSON.stringify(s)), s.value?.kind) {
      case "FETCH": {
        let a = s.value.data.tags ?? [];
        await this.setTags(a, { cacheKey: e }), F(a).forEach((n) => N.delete(n));
      }
    }
  }
  async get(e) {
    let r = await this.retrieve(e);
    if (!r)
      return null;
    let s;
    try {
      s = JSON.parse(r);
    } catch {
      return null;
    }
    switch (s.value?.kind) {
      case "FETCH":
        return await this.loadTagsManifest(), F(s.value.data.tags ?? []).some((i) => {
          if (N.has(i))
            return true;
          let o = this.tagsManifest?.items?.[i];
          return o?.revalidatedAt && o?.revalidatedAt >= (s.lastModified ?? Date.now());
        }) ? null : s;
      default:
        return s;
    }
  }
  async revalidateTag(e) {
    await this.setTags([e], { revalidatedAt: Date.now() }), N.add(e);
  }
  async loadTagsManifest() {
    try {
      let e = await this.retrieve(this.tagsManifestKey);
      e && (this.tagsManifest = JSON.parse(e));
    } catch {
    }
    this.tagsManifest ??= { version: 1, items: {} };
  }
  async saveTagsManifest() {
    if (this.tagsManifest) {
      let e = JSON.stringify(this.tagsManifest);
      await this.update(this.tagsManifestKey, e);
    }
  }
  async setTags(e, { cacheKey: r, revalidatedAt: s }) {
    await this.loadTagsManifest();
    let a = this.tagsManifest;
    for (let n of e) {
      let i = a.items[n] ?? { keys: [] };
      r && !i.keys.includes(r) && i.keys.push(r), s && (i.revalidatedAt = s), a.items[n] = i;
    }
    await this.saveTagsManifest();
  }
};
function F(t) {
  let e = ["/"];
  for (let r of t || [])
    if (r.startsWith("/")) {
      let s = r.split("/");
      for (let a = 1; a < s.length + 1; a++) {
        let n = s.slice(0, a).join("/");
        n && (e.push(n), e.includes(n) || e.push(n));
      }
    } else
      e.includes(r) || e.push(r);
  return e;
}
u();
l();
u();
l();
u();
l();
u();
l();
var D = A($());
function P(t, e, r) {
  if (e == null)
    return { match: null, captureGroupKeys: [] };
  let s = r ? "" : "i", a = [];
  return { match: (0, D.default)(`%${t}%${s}`, a).exec(e), captureGroupKeys: a };
}
function x(t, e, r, { namedOnly: s } = {}) {
  return t.replace(/\$([a-zA-Z0-9_]+)/g, (a, n) => {
    let i = r.indexOf(n);
    return s && i === -1 ? a : (i === -1 ? e[parseInt(n, 10)] : e[i + 1]) || "";
  });
}
function T(t, { url: e, cookies: r, headers: s, routeDest: a }) {
  switch (t.type) {
    case "host":
      return { valid: e.hostname === t.value };
    case "header":
      return t.value !== void 0 ? M(t.value, s.get(t.key), a) : { valid: s.has(t.key) };
    case "cookie": {
      let n = r[t.key];
      return n && t.value !== void 0 ? M(t.value, n, a) : { valid: n !== void 0 };
    }
    case "query":
      return t.value !== void 0 ? M(t.value, e.searchParams.get(t.key), a) : { valid: e.searchParams.has(t.key) };
  }
}
function M(t, e, r) {
  let { match: s, captureGroupKeys: a } = P(t, e);
  return r && s && a.length ? { valid: !!s, newRouteDest: x(r, s, a, { namedOnly: true }) } : { valid: !!s };
}
u();
l();
function B(t) {
  let e = new Headers(t.headers);
  return t.cf && (e.set("x-vercel-ip-city", t.cf.city), e.set("x-vercel-ip-country", t.cf.country), e.set("x-vercel-ip-country-region", t.cf.region), e.set("x-vercel-ip-latitude", t.cf.latitude), e.set("x-vercel-ip-longitude", t.cf.longitude)), new Request(t, { headers: e });
}
u();
l();
function g(t, e, r) {
  let s = e instanceof Headers ? e.entries() : Object.entries(e);
  for (let [a, n] of s) {
    let i = a.toLowerCase(), o = r?.match ? x(n, r.match, r.captureGroupKeys) : n;
    i === "set-cookie" ? t.append(i, o) : t.set(i, o);
  }
}
function v(t) {
  return /^https?:\/\//.test(t);
}
function y(t, e) {
  for (let [r, s] of e.entries()) {
    let a = /^nxtP(.+)$/.exec(r);
    a?.[1] ? (t.set(r, s), t.set(a[1], s)) : (!t.has(r) || !!s && !t.getAll(r).includes(s)) && t.append(r, s);
  }
}
function V(t, e) {
  let r = new URL(e, t.url);
  return y(r.searchParams, new URL(t.url).searchParams), r.pathname = r.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(r, t);
}
function _(t) {
  return new Response(t.body, t);
}
function L(t) {
  return t.split(",").map((e) => {
    let [r, s] = e.split(";"), a = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [r.trim(), isNaN(a) ? 1 : a];
  }).sort((e, r) => r[1] - e[1]).map(([e]) => e === "*" || e === "" ? [] : e).flat();
}
u();
l();
function U(t) {
  switch (t) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
async function S(t, { request: e, assetsFetcher: r, ctx: s }, { path: a, searchParams: n }) {
  let i, o = new URL(e.url);
  y(o.searchParams, n);
  let c = new Request(o, e);
  try {
    switch (t?.type) {
      case "function":
      case "middleware": {
        let h = await import(t.entrypoint);
        try {
          i = await h.default(c, s);
        } catch (d) {
          let m = d;
          throw m.name === "TypeError" && m.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${t.entrypoint})`) : d;
        }
        break;
      }
      case "override": {
        i = _(await r.fetch(V(c, t.path ?? a))), t.headers && g(i.headers, t.headers);
        break;
      }
      case "static": {
        i = await r.fetch(V(c, a));
        break;
      }
      default:
        i = new Response("Not Found", { status: 404 });
    }
  } catch (h) {
    return console.error(h), new Response("Internal Server Error", { status: 500 });
  }
  return _(i);
}
function K(t, e) {
  let r = "^//?(?:", s = ")/(.*)$";
  return !t.startsWith(r) || !t.endsWith(s) ? false : t.slice(r.length, -s.length).split("|").every((n) => n in e);
}
u();
l();
function ce(t, { protocol: e, hostname: r, port: s, pathname: a }) {
  return !(e && t.protocol.replace(/:$/, "") !== e || !new RegExp(r).test(t.hostname) || s && !new RegExp(s).test(t.port) || a && !new RegExp(a).test(t.pathname));
}
function ue(t, e) {
  if (t.method !== "GET")
    return;
  let { origin: r, searchParams: s } = new URL(t.url), a = s.get("url"), n = Number.parseInt(s.get("w") ?? "", 10), i = Number.parseInt(s.get("q") ?? "75", 10);
  if (!a || Number.isNaN(n) || Number.isNaN(i) || !e?.sizes?.includes(n) || i < 0 || i > 100)
    return;
  let o = new URL(a, r);
  if (o.pathname.endsWith(".svg") && !e?.dangerouslyAllowSVG)
    return;
  let c = a.startsWith("/") || a.startsWith("%2F");
  if (!c && !e?.domains?.includes(o.hostname) && !e?.remotePatterns?.find((m) => ce(o, m)))
    return;
  let h = t.headers.get("Accept") ?? "", d = e?.formats?.find((m) => h.includes(m))?.replace("image/", "");
  return { isRelative: c, imageUrl: o, options: { width: n, quality: i, format: d } };
}
function le(t, e, r) {
  let s = new Headers();
  if (r?.contentSecurityPolicy && s.set("Content-Security-Policy", r.contentSecurityPolicy), r?.contentDispositionType) {
    let n = e.pathname.split("/").pop(), i = n ? `${r.contentDispositionType}; filename="${n}"` : r.contentDispositionType;
    s.set("Content-Disposition", i);
  }
  t.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${r?.minimumCacheTTL ?? 60}`);
  let a = _(t);
  return g(a.headers, s), a;
}
async function z(t, { buildOutput: e, assetsFetcher: r, imagesConfig: s }) {
  let a = ue(t, s);
  if (!a)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: n, imageUrl: i } = a, o = new Request(i, { headers: t.headers }), c = n && i.pathname in e ? await r.fetch(o) : await fetch(o);
  return le(c, i, s);
}
u();
l();
u();
l();
u();
l();
var C = class extends b {
  cacheName = "suspense-cache";
  constructor(e = {}) {
    super(e);
  }
  async retrieve(e) {
    let s = await (await caches.open(this.cacheName)).match(this.buildCacheKey(e));
    return s ? s.text() : null;
  }
  async update(e, r) {
    let s = await caches.open(this.cacheName), a = "31536000", n = new Response(r, { headers: new Headers({ "cache-control": `max-age=${a}` }) });
    await s.put(this.buildCacheKey(e), n);
  }
  buildCacheKey(e) {
    return `https://${w}/entry/${e}`;
  }
};
async function W(t) {
  let e = `https://${w}/v1/suspense-cache/`;
  if (!t.url.startsWith(e))
    return null;
  try {
    let r = new URL(t.url), s = await he();
    if (r.pathname === "/v1/suspense-cache/revalidate") {
      let n = r.searchParams.get("tags")?.split(",") ?? [];
      for (let i of n)
        await s.revalidateTag(i);
      return new Response(null, { status: 200 });
    }
    let a = r.pathname.replace("/v1/suspense-cache/", "");
    if (!a.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (t.method) {
      case "GET": {
        let n = await s.get(a);
        return n ? new Response(JSON.stringify(n.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (n.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let n = await t.json();
        return await s.set(a, n), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (r) {
    return console.error(r), new Response("Error handling cache request", { status: 500 });
  }
}
async function he() {
  return new C();
}
function J() {
  globalThis.fetch[G] || (de(), globalThis.fetch[G] = true);
}
function de() {
  let t = globalThis.fetch;
  globalThis.fetch = async (...e) => {
    let r = new Request(...e), s = await pe(r);
    return s || (s = await W(r), s) ? s : (fe(r), t(r));
  };
}
async function pe(t) {
  if (t.url.startsWith("blob:"))
    try {
      let r = (await import(`./__next-on-pages-dist__/assets/${new URL(t.url).pathname}.bin`)).default, s = { async arrayBuffer() {
        return r;
      }, get body() {
        return new ReadableStream({ start(a) {
          let n = Buffer.from(r);
          a.enqueue(n), a.close();
        } });
      }, async text() {
        return Buffer.from(r).toString();
      }, async json() {
        let a = Buffer.from(r);
        return JSON.stringify(a.toString());
      }, async blob() {
        return new Blob(r);
      } };
      return s.clone = () => ({ ...s }), s;
    } catch {
    }
  return null;
}
function fe(t) {
  t.headers.has("user-agent") || t.headers.set("user-agent", "Next.js Middleware");
}
var G = Symbol.for("next-on-pages fetch patch");
u();
l();
var X = A(Z());
var E = class {
  constructor(e, r, s, a) {
    this.routes = e;
    this.output = r;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, X.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), y(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = a?.find((n) => n.domain === this.url.hostname);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(e, r) {
    let s = P(e.src, this.path, e.caseSensitive);
    if (!s.match || e.methods && !e.methods.map((n) => n.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let a = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: e.dest };
    if (!e.has?.find((n) => {
      let i = T(n, a);
      return i.newRouteDest && (a.routeDest = i.newRouteDest), !i.valid;
    }) && !e.missing?.find((n) => T(n, a).valid) && !(r && e.status !== this.status))
      return { routeMatch: s, routeDest: a.routeDest };
  }
  processMiddlewareResp(e) {
    let r = "x-middleware-override-headers", s = e.headers.get(r);
    if (s) {
      let c = new Set(s.split(",").map((h) => h.trim()));
      for (let h of c.keys()) {
        let d = `x-middleware-request-${h}`, m = e.headers.get(d);
        this.reqCtx.request.headers.get(h) !== m && (m ? this.reqCtx.request.headers.set(h, m) : this.reqCtx.request.headers.delete(h)), e.headers.delete(d);
      }
      e.headers.delete(r);
    }
    let a = "x-middleware-rewrite", n = e.headers.get(a);
    if (n) {
      let c = new URL(n, this.url);
      this.path = c.pathname, y(this.searchParams, c.searchParams), e.headers.delete(a);
    }
    let i = "x-middleware-next";
    e.headers.get(i) ? e.headers.delete(i) : !n && !e.headers.has("location") && (this.body = e.body, this.status = e.status), g(this.headers.normal, e.headers), this.headers.middlewareLocation = e.headers.get("location");
  }
  async runRouteMiddleware(e) {
    if (!e)
      return true;
    let r = e && this.output[e];
    if (!r || r.type !== "middleware")
      return this.status = 500, false;
    let s = await S(r, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(e), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(e) {
    !e.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(e, r, s) {
    !e.headers || (g(this.headers.normal, e.headers, { match: r, captureGroupKeys: s }), e.important && g(this.headers.important, e.headers, { match: r, captureGroupKeys: s }));
  }
  applyRouteStatus(e) {
    !e.status || (this.status = e.status);
  }
  applyRouteDest(e, r, s) {
    if (!e.dest)
      return this.path;
    let a = this.path, n = e.dest;
    this.wildcardMatch && /\$wildcard/.test(n) && (n = n.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = x(n, r, s), /\/index\.rsc$/i.test(this.path) && !/^\/(?:index)?$/i.test(a) && (this.path = a);
    let i = /(\.prefetch)?\.rsc$/i.test(this.path), o = this.path in this.output;
    i && !o && (this.path = this.path.replace(/(\.prefetch)?\.rsc/i, ""));
    let c = new URL(this.path, this.url);
    return y(this.searchParams, c.searchParams), v(this.path) || (this.path = c.pathname), a;
  }
  applyLocaleRedirects(e) {
    if (!e.locale?.redirect || (this.locales || (this.locales = {}), Object.assign(this.locales, e.locale.redirect), !/^\^(.)*$/.test(e.src) && e.src !== this.path) || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: s, cookie: a } } = e, n = a && this.cookies[a], i = L(n ?? ""), o = L(this.reqCtx.request.headers.get("accept-language") ?? ""), d = [...i, ...o].map((m) => s[m]).filter(Boolean)[0];
    if (d) {
      !this.path.startsWith(d) && (this.headers.normal.set("location", d), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(e, r) {
    return !this.locales || r !== "miss" ? e : K(e.src, this.locales) ? { ...e, src: e.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : e;
  }
  async checkRoute(e, r) {
    let s = this.getLocaleFriendlyRoute(r, e), { routeMatch: a, routeDest: n } = this.checkRouteMatch(s, e === "error") ?? {}, i = { ...s, dest: n };
    if (!a?.match || i.middlewarePath && this.middlewareInvoked.includes(i.middlewarePath))
      return "skip";
    let { match: o, captureGroupKeys: c } = a;
    if (this.applyRouteOverrides(i), this.applyLocaleRedirects(i), !await this.runRouteMiddleware(i.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(i, o, c), this.applyRouteStatus(i);
    let d = this.applyRouteDest(i, o, c);
    if (i.check && !v(this.path))
      if (d === this.path) {
        if (e !== "miss")
          return this.checkPhase(U(e));
        this.status = 404;
      } else if (e === "miss") {
        if (!(this.path in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return i.continue ? "next" : "done";
  }
  async checkPhase(e) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let r = true;
    for (let n of this.routes[e]) {
      let i = await this.checkRoute(e, n);
      if (i === "error")
        return "error";
      if (i === "done") {
        r = false;
        break;
      }
    }
    if (e === "hit" || v(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    let s = this.path in this.output;
    if (e === "rewrite" && !s && this.path.endsWith("/")) {
      let n = this.path.replace(/\/$/, "");
      s = n in this.output, s && (this.path = n);
    }
    if (e === "miss" && !s) {
      let n = !this.status || this.status < 400;
      this.status = n ? 404 : this.status;
    }
    let a = "miss";
    return s || e === "miss" || e === "error" ? a = "hit" : r && (a = U(e)), this.checkPhase(a);
  }
  async run(e = "none") {
    this.checkPhaseCounter = 0;
    let r = await this.checkPhase(e);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), r;
  }
};
async function Y(t, e, r) {
  let s = new E(e.routes, r, t, e.wildcard), a = await Q(s);
  return _e(t, a, r);
}
async function Q(t, e = "none", r = false) {
  return await t.run(e) === "error" || !r && t.status && t.status >= 400 ? Q(t, "error", true) : { path: t.path, status: t.status, headers: t.headers, searchParams: t.searchParams, body: t.body };
}
async function _e(t, { path: e = "/404", status: r, headers: s, searchParams: a, body: n }, i) {
  let o = s.normal.get("location");
  if (o) {
    if (o !== s.middlewareLocation) {
      let d = [...a.keys()].length ? `?${a.toString()}` : "";
      s.normal.set("location", `${o ?? "/"}${d}`);
    }
    return new Response(null, { status: r, headers: s.normal });
  }
  let c;
  if (n !== void 0)
    c = new Response(n, { status: r });
  else if (v(e)) {
    let d = new URL(e);
    y(d.searchParams, a), c = await fetch(d, t.request);
  } else
    c = await S(i[e], t, { path: e, status: r, headers: s, searchParams: a });
  let h = s.normal;
  return g(h, c.headers), g(h, s.important), c = new Response(c.body, { ...c, status: r || c.status, headers: h }), c;
}
var Dt = { async fetch(t, e, r) {
  J();
  let s = await __ENV_ALS_PROMISE__;
  if (!s) {
    let a = new URL(t.url), n = await e.ASSETS.fetch(`${a.protocol}//${a.host}/cdn-cgi/errors/no-nodejs_compat.html`), i = n.ok ? n.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(i, { status: 503 });
  }
  return s.run({ ...e, NODE_ENV: "production", SUSPENSE_CACHE_URL: w }, async () => {
    if (new URL(t.url).pathname.startsWith("/_next/image"))
      return z(t, { buildOutput: f, assetsFetcher: e.ASSETS, imagesConfig: p.images });
    let n = B(t);
    return Y({ request: n, ctx: r, assetsFetcher: e.ASSETS }, p, f);
  });
} };

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-Lvigzl/d5dd2q6hbwv.js
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.7.3.", include: ["/*"], exclude: ["/_next/static/*"] };
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
        if (Dt.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return Dt.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-MHVmkR/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...pages_dev_pipeline_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...pages_dev_pipeline_default.middleware ? pages_dev_pipeline_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// .wrangler/tmp/bundle-MHVmkR/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  middleware_loader_entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=d5dd2q6hbwv.js.map
