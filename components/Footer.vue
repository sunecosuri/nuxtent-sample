<template>
    <footer class="footer">
      <div class="footer-notes">
        <div class="col" style="float:left;width:60%;">
          <div style="margin-bottom:20px;">Vue Framework<br/><a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt.js</a></div>
          <!-- <div style="margin-bottom:20px;">Lorem Ipsum by<br/><a href="http://spaceipsum.com" target="_blank">http://spaceipsum.com</a></div>
          <div style="margin-bottom:20px;">UI Gradients by<br/><a href="http://uigradients.com" target="_blank">http://uigradients.com</a></div> -->
        </div>
        <div class="col" style="float:left;width:40%;">
          <div style="margin-bottom:20px;">
            <a style="margin-right:20px;" href="https://github.com/sunecosuri" target="_blank">
              <i class="fa fa-github social-icon"></i>
            </a>
            <a href="https://twitter.com/sunecosuri" target="_blank">
              <i class="fa fa-twitter social-icon"></i>
            </a>
          </div>
          <div style="margin-bottom:20px;">&copy; {{ new Date().getFullYear() }} ロリポップマネージドクラウド</div>
          <div style="margin-bottom:20px;">
            <a href="https://mclolipop.jp" target="_blank">
              <img style="float:left;margin-right:15px;position:relative;" src="https://pbs.twimg.com/profile_images/930985624009564160/dbh4hDtT_400x400.jpg" width="28" height="28"/>
              <span>Proudly powered by  ロリポップマネージドクラウド</span>
            </a>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </footer>
  </div>
</template>

<style>
.footer {
  background: #333;  /* fallback for old browsers */
  color: #fff;
  font-size: 18px;
  width: 100%;
}
.footer-notes {
  margin: 0 auto;
  max-width: 960px;
  padding: 15px;
  padding-bottom: 60px;
  padding-top: 40px;
}
</style>
