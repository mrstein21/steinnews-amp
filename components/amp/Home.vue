<template>
 <div>
    <header>
      SteinNews - AMP
    </header>
    <div class="main">
      <amp-list
        load-more-bookmark="next"  
        load-more="manual"
        id = "amplist" width = "auto" height = "100" 
        layout = "fixed-height" :src = "server+'/articles/amp?page=1'" class = "m1">
        <amp-mustache>
          <template v-pre>
            <a href="/amp/{{slug}}">
            <amp-img src="{{image_url}}" width="200"   height="100" layout="responsive"></amp-img> 
            <div class="news-info">
              <div class="news-title">{{title}}</div>
              <div class="news-date">{{date_create}}</div>
              <div class="news-short-desc">{{short_description}}</div> 
            </div>
            </a>
          </template>
        </amp-mustache>
        <amp-list-load-more load-more-button>
          <center>
            <button class="loadmore">Load More</button>
          </center>
      </amp-list-load-more>
      </amp-list> 
    </div>     
 </div> 
</template>
<script>
export default {
  data(){
    return {
      server: process.env.API_URL,
    }
  }
}
</script>
