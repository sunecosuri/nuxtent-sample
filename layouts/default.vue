<template>
  <div>
    <navigation />
    <div class="container">
      <nuxt/>
    </div>
    <site-footer />
  </div>
</template>

<script>
import Navigation from '~/components/Header.vue'
import SiteFooter from '~/components/Footer.vue'
export default {
  components: {
    Navigation,
    SiteFooter
  }
}
</script>

<style src="~/assets/main.css" />
