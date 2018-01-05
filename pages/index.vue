<template>
  <section class="home-container">
    <div>
      <div class="home-links">
        <h2 class="home-slogan">
          Seamlessly use content files in your Nuxt.js sites.
        </h2>
        <p>
          隴西の李徴は博学才穎、天宝の末年、若くして名を虎榜に連ね、ついで江南尉に補せられたが、性、狷介、自ら恃むところ頗る厚く、賤吏に甘んずるを潔しとしなかった。
        </p>
        <p>
          いくばくもなく官を退いた後は、故山、※略に帰臥し、人と交を絶って、ひたすら詩作に耽った。下吏となって長く膝を俗悪な大官の前に屈するよりは、詩家としての名を死後百年に遺そうとしたのである。
          しかし、文名は容易に揚らず、生活は日を逐うて苦しくなる。李徴は漸く焦躁に駆られて来た。
        </p>
        <p>
          この頃からその容貌も峭刻となり、肉落ち骨秀で、眼光のみ徒らに炯々として、曾て進士に登第した頃の豊頬の美少年の俤は、何処に求めようもない。
          数年の後、貧窮に堪えず、妻子の衣食のために遂に節を屈して、再び東へ赴き、一地方官吏の職を奉ずることになった。
        </p>
        <p>
          一方、これは、己の詩業に半ば絶望したためでもある。
          叢の中からは、暫く返辞が無かった。しのび泣きかと思われる微かな声が時々洩れるばかりである。
          ややあって、低い声が答えた。「如何にも自分は隴西の李徴である」と。
        </p>
        <nuxt-link to="/hello-world" class="button--green">See Your First Post</nuxt-link>
        <a href="https://github.com/nuxt-community/content-module" target="_blank" class="button--grey">Learn More on Github</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-container
{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
p
{
  color: #fff;
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
.home-slogan
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.home-links
{
  padding-top: 15px;
}
</style>
