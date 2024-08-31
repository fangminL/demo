<template>
    <div>
        <h1>用户</h1>
        <div class="user" v-if="users.isLoggedIn">
            <h2>用户名：{{ users.name }}</h2>
            <h2>年龄：{{ users.age }}</h2>
            <a href="javascript:void(0);" @click="outLogin">退出登录</a>
        </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
  // 或 middleware: 'auth'
})
const users=useCurrentData();
</script>