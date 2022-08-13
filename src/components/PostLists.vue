<template>
  <h1>Post Lists</h1>
  <div v-for="post in posts" :key="post.id">
  <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from '../components/SinglePost.vue'
export default {
  components: { SinglePost },
    props:["posts"],
    // setup(props){
    //     console.log(props.post);
    // }
}
</script>

<style>

</style>