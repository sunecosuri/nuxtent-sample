<template>
  <section class="home-container">
    <div>
      <h2 class="home-slogan">
        記事一覧ページtest
      </h2>
      <div class="home-content">
        <p v-for="post in posts">
          <a :href="post.permalink">{{post.title}}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData: async ({ app }) => ({
    posts: await app.$content('/').getAll()
  })
}
</script>

<style>
.home-container
{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.home-content
{
  margin: 0 auto;
  margin-top: 5px;
  padding: 30px;
}
.home-slogan
{
  font-weight: 300;
  font-size: 42px;
  color: #fff;
  word-spacing: 5px;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 15px;
}
.home-links
{
  padding-top: 15px;
  background-color: #fff;
}
.home-content .p 
{
  text-align: left;
  margin: 0 auto;
  color: #333;
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  margin: 0 auto;
}
</style>

