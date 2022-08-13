<template>
  <div class="tag">
    <div v-if="err">
    {{err}}
  </div>
  <div v-if="posts.length" class="layout">
    <div>
          <PostLists :posts="filteredPosts"></PostLists>
    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>
  <div v-else>
    loading....
  </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostLists from '../components/PostLists'
import getPosts from '@/composables/getPosts'
import { computed } from '@vue/runtime-core';
export default {
  components: {
    TagCloud,
    PostLists },
    props: ['tag'],
    setup(props){
        let {load,err,posts}= getPosts();
        load();
        let filteredPosts = computed(()=>{
            return posts.value.filter((el)=>{
                return el.tags.includes(props.tag)
            })
        })
        return {err,posts,filteredPosts}
    }
}
</script>

<style>
.tag{
  max-width: 1200px;
  margin: 0 auto;
}
</style>