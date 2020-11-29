<template>
  <div class="about">
    <ul>
      <li>
        <router-Link :to="{ name: 'Detail', params: { username: '张三' } }"
          >张三</router-Link
        >
      </li>
      <li>
        <router-Link :to="{ name: 'Detail', params: { username: '李四' } }"
          >李四</router-Link
        >
      </li>
      <li>
        <router-Link :to="{ name: 'Detail', params: { username: '王二' } }"
          >王二</router-Link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>