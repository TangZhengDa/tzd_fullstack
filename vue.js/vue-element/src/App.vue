<template>
  <div class="page">
    <p>
      <router-link to="/">首页</router-link> |
      <router-Link to="/about">关于</router-Link>
    </p>
    <VerifyCode />
    <!-- 路由入口 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  opacity: 0;
  /* transition: opacity 0.5s; */
}
p {
  text-align: center;
}
.page {
  text-align: center;
}
</style>