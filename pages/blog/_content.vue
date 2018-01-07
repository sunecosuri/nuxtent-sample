<template>
<section class="content-area">
  <div class="content-container">
    <h1 class="post-title"> {{ post.title }} {{ te }} </h1>
    <nuxtent-body :body="post.body" />
  </div>
</section>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => ({
    post: await app.$content('/').get(route.path) || payload
  })
}
</script>

<style scoped>
.content-area
{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.content-container
{
  width: 38rem;
  margin: 0 auto;
  margin-top: 2frem;
}
.post-title
{
  font-size: 2.5rem;
  margin-top: 4rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #35495e;
}
</style>
