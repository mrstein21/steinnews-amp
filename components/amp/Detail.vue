<template>
  <div>
    <header>
      SteinNews - AMP
    </header>
    <div class="news-detail">
     <amp-img :src="article.image_url" width="200"   height="100" layout="responsive"></amp-img> 
      <div class="news-detail-title">{{article.title}}</div>
      <div class="news-detail-date">{{article.date_create}}</div>
        <amp-social-share type="tumblr" aria-label="Share on Tumblr"></amp-social-share>
        <amp-social-share type="twitter" aria-label="Share on Twitter"></amp-social-share>
        <amp-social-share type="whatsapp" aria-label="Share on WhatsApp"></amp-social-share>
        <amp-social-share type="line" aria-label="Share on Line"></amp-social-share>
      <div class="news-detail-content" v-html="content"></div>
      <amp-image-lightbox id="lightbox1" layout="nodisplay"></amp-image-lightbox>
  </div>
  </div>        
</template>
<script>
export default {
 props:["content","article"],   
 data(){
    return {
      params:this.$route.params.slug,
      server: process.env.API_URL,
  }
 }
}
</script>