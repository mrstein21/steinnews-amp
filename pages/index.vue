<template>
 <div v-if="$isAMP">
   <Home/>
 </div>
  <div v-else>
    <NavBar/>
     <div class="bg-white p-8 grid grid-cols-1 sn:grid-cols-2  md:grid-cols-3">
       <Article v-for="data in article" :key="data.id" :article="data"/>
    </div>
    <div class="mb-2 flex content-center items-center justify-center">
      <button    @click="prevPage"  :disabled="pageNumber <= 1" class="bg-red-600  text-white font-bold py-2 px-4 rounded-l">
        Prev
      </button>
      <button  @click="nextPage" :disabled="pageNumber >= totalPage"  class="bg-red-600   text-white font-bold py-2 px-4 rounded-r">
          Next
      </button> 
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import https from 'https';
export default {
   amp:'hybrid',
   methods:{
    prevPage () {
      this.pageNumber--
      this.configurePage()
    },

    // Halaman selanjutnya
    nextPage () {
      this.pageNumber++
      this.configurePage()
    },
     configurePage () {
       location.href='/?page='+this.pageNumber
    }
  },
  data () {
    return {
      url:process.env.API_URL,
      pageNumber: this.$route.query.page ? this.$route.query.page : 1,
    }
  },
  asyncData(context){
    const agent = new https.Agent({  
      rejectUnauthorized: false
    }); 
    return new Promise((resolve,reject)=>{
      console.log(process.env.API_URL);
      var pageNumber=context.query.page ? context.query.page : 1
      axios.get(process.env.API_URL+"/articles?page="+pageNumber,{
        httpsAgent: agent
      }).then((resp)=>{
        resolve({
          article:resp.data.data.results,
          totalPage:Math.ceil(resp.data.data.total/6)
        })
      })
    })
  }
}
</script>
