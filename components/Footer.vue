<template>
    <footer class="footer">
      <div class="footer-notes">
        <div class="col" style="float:right">
          <div>
            powered by <nuxt-router :to="`https://nuxtjs.org`">Nuxt.js</nuxt-router> && 
            <nuxt-router :to="`https://mc.lolipop.jp`">ロリポップ！マネージドクラウド</nuxt-router>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.footer {
  background-color: #333;  /* fallback for old browsers */
  color: #fff;
  font-size: 18px;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 5em;
}
.footer-notes {
  margin: 0 auto;
  max-width: 960px;
}
</style>
