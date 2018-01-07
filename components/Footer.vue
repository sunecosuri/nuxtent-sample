<template>
    <footer class="footer">
      <div class="footer-notes">
        <div class="col" style="float:right">
          <div>
            <a style="margin-right:10px;" href="https://github.com/sunecosuri" target="_blank">
              <i class="fa fa-github social-icon"></i>
            </a>
            <a href="https://twitter.com/sunecosuri" target="_blank">
              <i class="fa fa-twitter social-icon"></i>
            </a>
          </div>
          <div>
              <div>
                powered by <nuxt-router :to="`https://nuxtjs.org`">Nuxt.js</nuxt-router> && <nuxt-router :to="`https://mc.lolipop.jp`">ロリポップ！マネージドクラウド</nuxt-router>
              </div>
          </div>
        </div>
        <div class="clearfix"></div>
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
  bottom: 0;
  height: 5em;
}
.footer-notes {
  margin: 0 auto;
  max-width: 960px;
}
</style>
