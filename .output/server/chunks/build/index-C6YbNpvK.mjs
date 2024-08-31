import { defineComponent, unref, useSSRContext } from 'vue';
import { u as useCurrentData } from './users-Tdlz-r6D.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const users = useCurrentData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>\u7528\u6237</h1>`);
      if (unref(users).isLoggedIn) {
        _push(`<div class="user"><h2>\u7528\u6237\u540D\uFF1A${ssrInterpolate(unref(users).name)}</h2><h2>\u5E74\u9F84\uFF1A${ssrInterpolate(unref(users).age)}</h2><a href="javascript:void(0);">\u9000\u51FA\u767B\u5F55</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C6YbNpvK.mjs.map
