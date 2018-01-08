<!-- layouts/default.vue -->
<template>
  <div>
    <header-nav />
    <nuxt/>
    <site-footer />
  </div>
</template>

<script>
// 使うコンポーネントを読み込み
import HeaderNav from '~/components/HeaderNav.vue'
import SiteFooter from '~/components/Footer.vue'
// 利用するコンポーネントを設定
export default {
  components: {
    HeaderNav,
    SiteFooter
  }
}
</script>

<style src="~/assets/main.css" />

