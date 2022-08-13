import { ref } from "vue";
import { db } from "../firebase/config";

let getPost = (id)=>{

    let err = ref('');
    let post = ref(null);
    let load = async()=>{
        try {
            //spinner
            // await new Promise((resolve,reject)=>{
            //     setTimeout(resolve,2000);
            // })

            //fetch from local database
            // let response = await fetch('http://localhost:3000/posts/'+id);
            // if (response.status === 404) {
            //     throw new Error("Not found that url !!")
            // }
            // let data = await response.json();
            // post.value = data;

            //fetch from firebase database
            let doc = await db.collection("posts").doc(id).get();
            // console.log(doc);
            post.value = {id: doc.id ,...doc.data()};
            


        } catch (error) {
            err.value = error.message;
        }        
    }
    return {load,err,post}
}
export default getPost;