const client_manifest = {
  "_BKDBYnB6.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BKDBYnB6.js",
    "name": "users",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_BNFv2n2D.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BNFv2n2D.js",
    "name": "vue.65b7bcda",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_C9EvWE3Z.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "C9EvWE3Z.js",
    "name": "nuxt-link",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_Cf58aPhk.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Cf58aPhk.js",
    "name": "common",
    "imports": [
      "_BKDBYnB6.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "layouts/default.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DGzqKhKq.js",
    "name": "default",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "_C9EvWE3Z.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "middleware/auth.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BUgHrLNK.js",
    "name": "auth",
    "src": "middleware/auth.ts",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_Cf58aPhk.js",
      "_BKDBYnB6.js"
    ]
  },
  "node_modules/nuxt/dist/app/components/error-404.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "B3KIQRM2.js",
    "name": "error-404",
    "src": "node_modules/nuxt/dist/app/components/error-404.vue",
    "isDynamicEntry": true,
    "imports": [
      "_C9EvWE3Z.js",
      "_BNFv2n2D.js",
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "css": []
  },
  "error-404.DXySnQZL.css": {
    "file": "error-404.DXySnQZL.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "node_modules/nuxt/dist/app/components/error-500.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CyxtgOLE.js",
    "name": "error-500",
    "src": "node_modules/nuxt/dist/app/components/error-500.vue",
    "isDynamicEntry": true,
    "imports": [
      "_BNFv2n2D.js",
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "css": []
  },
  "error-500.CIkJDsQj.css": {
    "file": "error-500.CIkJDsQj.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "node_modules/nuxt/dist/app/entry.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "FDRnG0H-.js",
    "name": "entry",
    "src": "node_modules/nuxt/dist/app/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "middleware/auth.ts",
      "layouts/default.vue",
      "node_modules/nuxt/dist/app/components/error-404.vue",
      "node_modules/nuxt/dist/app/components/error-500.vue"
    ],
    "css": [
      "entry.C2efPjDO.css"
    ],
    "_globalCSS": true
  },
  "entry.C2efPjDO.css": {
    "file": "entry.C2efPjDO.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "pages/index/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CWIANRwJ.js",
    "name": "index",
    "src": "pages/index/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_BKDBYnB6.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/login/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DiaIRWcN.js",
    "name": "index",
    "src": "pages/login/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_Cf58aPhk.js",
      "node_modules/nuxt/dist/app/entry.js",
      "_BKDBYnB6.js"
    ]
  },
  "pages/users/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Cl5NLo5v.js",
    "name": "index",
    "src": "pages/users/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_BKDBYnB6.js",
      "_Cf58aPhk.js"
    ]
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
