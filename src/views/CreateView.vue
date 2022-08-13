<template>
  <div>
    <h1>Create Post</h1>
    <form @submit.prevent="addPost">
        <label for="">Title</label>
        <input type="text" v-model="title">

        <label for="">Body</label>
        <textarea v-model="body"></textarea>

        <label for="">Tag (hit enter to add a tag)</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="addTag">

        <p class="pill" v-for="tag in tags" :key="tag">{{tag}}</p>

        <button >Create</button>
    </form>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router' //use router(redirect)
import { db,timestamp } from "../firebase/config";
export default {
setup(){
    let title = ref('');
    let body = ref('');
    let tag = ref('');
    let tags = ref([]);

    //use route
    let router = useRouter();
    // console.log(router);
    
    let addTag = () =>{
        // console.log("adding Post");
        if(!tags.value.includes(tag.value)){
            tags.value.push(tag.value)
        }
        tag.value = '';
    };
    let addPost =async () =>{
          // create post to local database

          //  await fetch('http://localhost:3000/posts',{
          //   method: "POST",
          //   headers: {
          //       "Content-Type":"application/json"
          //   },
          //   body: JSON.stringify(
          //       {
          //           title: title.value,
          //           body: body.value,
          //           tags: tags.value
          //       }
          //   )
          //  })

          //create post to firebase database
          let newPost = {
            title: title.value,
            body: body.value,
            tags: tags.value,
            created_at: timestamp()
          }
          let res = await db.collection("posts").add(newPost);
          console.log(res);
           router.push('/');//redirect to home
    }

    return{title,body,tag,addTag,tags,addPost}
}
}
</script>

<style scoped>
h1{
  text-align: center;
}
 form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>