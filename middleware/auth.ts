export default defineNuxtRouteMiddleware((to, from) => {
  // 检测登录状态
  if (isAuthenticated() === false && to.path!== '/login') {
    return navigateTo('/login')
  }
})