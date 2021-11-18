<template>
 <div v-if="$isAMP">
   <Detail :content="data_content" :article="article"/>
 </div>
  <div v-else>
     <client-only>
      <vue-easy-lightbox
        :visible="visible"
        :index="index"
        :imgs="images"
        @hide="visible = false"
        @on-prev="handlePrev"
        @on-next="handleNext"
      />
    </client-only>
      <NavBar/>
       <div class="px-8 py-5 md:px-48">
        <img
            class="mt-2 rounded-lg shadow-xl  h-34  md:h-96  w-full  object-fill"
            v-bind:src="article.image_url"/>
          <h1 class="mt-2  font-bold text-gray-900 text-sm sm:text-3xl">{{article.title}}</h1>  
          <p class="mt-2  font-bold text-gray-600 text-sm sm:text-xl">{{article.date_create}}</p> 
          <div  id="content" class="mt-7  text-gray-600 text-sm" v-html="article.content"></div> 
       </div>    
  </div>
</template>
<script>
import axios from 'axios';
import https from 'https';
export default {
  data(){
    return {
       images:[],
       index:0,
        visible: false,
    }
  },   
  amp:'hybrid',
  mounted(){
    var data=document.getElementById("content");
    var element_image=data.getElementsByTagName("img")
    if(element_image!=null){
     for(var i=0;i<element_image.length;i++){     
      this.images.push(element_image[i].getAttribute("src"));
      element_image[i].setAttribute("class","pic");
      element_image[i].setAttribute("index_image",i);
     }
    }
    
    document.addEventListener("click",(e)=>{
      if(e.target.getAttribute("index_image")!=null){
           var indexed=parseInt(e.target.getAttribute("index_image"));
           this.index = indexed;
           this.visible = true
      }
    });
  },
  updated(){
     
  },
  methods:{
      handlePrev(oldIndex, newIndex) {
      
      },
      handleNext(oldIndex, newIndex) {
        
      },
  },
  asyncData(context){
  return new Promise((resolve,reject)=>{
    const agent = new https.Agent({  
      rejectUnauthorized: false
    }); 
    axios.get(process.env.API_URL+"/articles/slug/"+context.params.slug,{
        httpsAgent: agent
      }).then((resp)=>{
        var data_content=resp.data.data.content;  
        data_content=data_content.replace(/<iframe/g,"<amp-iframe width='100' height='100'  sandbox='allow-scripts allow-same-origin' layout='responsive' ") 
        data_content=data_content.replace(/<\/iframe>/g,"<amp-img layout='fill' src='https://foo.com/foo.png' placeholder></amp-img></amp-iframe>")
        data_content=data_content.replace(/<img/g,"<amp-img width='200' on='tap:lightbox1' role='button' tabindex='0'      height='100' layout='responsive' style='' ") 
        resolve({
          data_content:data_content,  
          article:resp.data.data,
        })
      })
    })
 },
}
</script>
<style>
#content img{
  height: auto !important;
}
</style>
