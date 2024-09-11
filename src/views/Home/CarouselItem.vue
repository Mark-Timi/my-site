<template>
  <div class="carouselItem-container">
    <ImageLoader  :src="item.bigImg"></ImageLoader>
    <div class="word">
      <h1 class="title">
        {{ item.title }}
      </h1>

      <h2 class="description">
        {{ item.description }}
      </h2>
      
    </div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
    components:{
        ImageLoader
    },
    props:['item'],
    created(){
       
    }
}
</script>

<style scoped lang="less">
.carouselItem-container{
    height: 100%;
    width: 100%;
   position: relative;
    
}
.word{
  color: white;
  position: absolute;
  left: 5%;
  top: 50%;
  .title{
    margin-bottom: 10px;
    font-size: 35px;
    text-shadow: 
        -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000,
       10px 0 20px pink
    
  }
  .description{
    color: darken(white,15%);
  }
}
</style>