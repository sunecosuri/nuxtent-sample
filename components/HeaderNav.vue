<!-- components/HeaderNav.vue　 -->
<template>
  <nav class="nav">
    <ul>
      <li>
        <nuxt-link to="/" exact>Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/profile">Profile</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.nav {
  height: 60px;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1;
}
</style>
