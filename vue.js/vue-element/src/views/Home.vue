<template>
  <div class="home">
    这是home页面{{ $route.params.id }}
    <p>
      <router-Link to="/home1">首页1</router-Link> |
      <router-Link to="/home2">首页2</router-Link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>