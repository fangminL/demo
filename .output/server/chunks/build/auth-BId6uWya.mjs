import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useCurrentData } from './users-Tdlz-r6D.mjs';
import 'vue';
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
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

let users = useCurrentData();
const isAuthenticated = () => {
  return users.value.isLoggedIn;
};
const auth = defineNuxtRouteMiddleware((to, from) => {
  if (isAuthenticated() === false && to.path !== "/login") {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-BId6uWya.mjs.map
