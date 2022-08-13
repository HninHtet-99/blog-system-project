<template>
<h3>{{err}}</h3>
  <!-- <h2>Detail {{id}} </h2> -->
  <div v-if="post" class="post">
    <h4>{{post.title}}</h4>
    <p>{{post.body}}</p>
    <button @click="deletePost">Delete</button>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import { useRoute } from 'vue-router';  //use route
import { useRouter } from 'vue-router';
import { db } from "../firebase/config";

export default {
  components: { Spinner },
    props: ['id'],
    setup(props){
        //use route
        let route = useRoute();

        let router = useRouter();
        
        // console.log(route.params.id);
        let {err,load,post} = getPost(route.params.id);

        //let {err,load,post} = getPost(props.id); //{err,load,post}
        load();
        
        //delete from firebase database
        let deletePost = async() =>{
          await db.collection("posts").doc(props.id).delete();
          router.push("/");
        }
        return{err,post,deletePost}
    }
}
</script>

<style>
.post {
        margin: 0 40px 30px;
        padding-bottom: 30px;
        border-bottom: 1px dashed #e7e7e7;
      }
  .post h4 {
        display: inline-block;
        position: relative;
        font-size: 26px;
        color: white;
        margin-bottom: 10px;
        max-width: 400px;
      }
  .post h4::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform: rotateZ(-1deg);
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
      button {
        display: block;
        margin: 30px auto;
        background: #ff8800;
        color: white;
        border: none;
        padding: 8px 16px;
        font-size: 18px
        
      }
</style>