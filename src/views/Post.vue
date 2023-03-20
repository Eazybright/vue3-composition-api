<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import useResource from "../composables/useResource.js"
import { useRouter } from 'vue-router'

const route = useRouter()
const { item: post, fetchOne: fetchPost } = useResource('posts')
// const post = {
//   title:
//     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
// };

const { user, fetchOne: fetchUser } = useResource('users')
fetchPost(route.params.id).then(() => {
    fetchUser(post.value.userId)
})
// const user = {
//   name: "Leanne Graham",
// };
</script>
