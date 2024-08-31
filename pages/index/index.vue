<template>
  <div>
      <h1>首页</h1>
      <div class="user">
            <h2>用户名：{{ users.name }}</h2>
            <h2>年龄：{{ users.age }}</h2>
        </div>
    </div>
</template>
<script setup lang="ts">
const users=useCurrentData();
</script>