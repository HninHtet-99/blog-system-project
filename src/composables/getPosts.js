import { ref } from "vue";
import { db } from "../firebase/config";

let getPosts = ()=>{
    let posts = ref([]);
    let err = ref("");
    let load = async()=>{
      try{
        //spinner
        // await new Promise((resolve,reject)=>{
        //   setTimeout(resolve,2000);
        // })

        // fetch from local database 

        // let response = await fetch("http://localhost:3000/posts");
        //   if (response.status === 404) {
        //     throw new Error("page not found!!");
        //   }
        //   let datas = await response.json();
        //   posts.value = datas;

        // fetch from firebase database
        // let res = await db.collection("posts").get();

        // with time order 
       let res = await db.collection("posts").orderBy("created_at",'desc').get();
       posts.value = res.docs.map((el)=>{
        return {id: el.id,...el.data()}
       })
          
      }catch(error){
        err.value = error.message;
      }
    }
    return {load,err,posts}
}
export default getPosts ;