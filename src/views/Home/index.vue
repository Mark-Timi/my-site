<template>
  <div class="home-container" ref="container" v-loading="isLoading">
    
    
    
    <ul class="banners" :style="{marginTop:bannerMargin}" ref="banners">
      <li v-for="item in remoteData" :key="item.id">
        <CarouselItem :item="item"/>
      </li>
    </ul>


    <!-- absolute定位 -->
    <div class="icon iconUp" v-show="current!=1" @click="switchTo(current-1)">
      <Icon type="arrowUp"></Icon>
    </div>
    <div class="icon iconDown" v-show="current!=this.remoteData.length" @click="switchTo(current+1)">
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indicator">
      <li v-for="(item,index) in remoteData" :key="item.id" :class="{active:index+1===current}" @click="switchTo(index+1)">
      </li>
    </ul>
  </div>
</template>

<script>
import {getBanner} from '@/api/banner'
import CarouselItem from './CarouselItem.vue';
import Icon from '@/components/Icon'
import fetchMixin from '@/mixins/fetchDataMixin.js'


export default {
  components:{
    CarouselItem,Icon
  },
  mixins:[fetchMixin([])],
  data(){
    return{
      
      current:1,
      containerHeight:0,
      isChanging:false,
      
    }
  },
  async created(){
    window.addEventListener('resize',this.handleResize)
    
    
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.handleResize);
   
  },
  mounted(){
    this.containerHeight=this.$refs.container.clientHeight;
    this.$refs.container.addEventListener('wheel',this.handleWheel)
    this.$refs.banners.addEventListener('transitionend',this.handleTransitionend)
  },
  computed:{
    bannerMargin(){
      return -(this.current-1)*this.containerHeight+'px';
    }
  },
  methods:{
    async fetchData(){
      return await getBanner()
    },
    switchTo(newPage){
      this.current=newPage;
    },
    handleResize(){
      this.containerHeight=this.$refs.container.clientHeight;
    },
    handleWheel(e){
      console.log(e);
      const deltaY=e.deltaY;
      console.log(deltaY);
      
      if(Math.abs(deltaY)<5 || this.isChanging) return
      if(deltaY>0&&this.current<this.remoteData.length)
      {
        this.current++
        this.isChanging=true
      }
      else if(deltaY<0&&this.current>1){
        this.current--
        this.isChanging=true
      }
    },
    handleTransitionend()
    {
      this.isChanging=false
    }
  }
}
</script>

<style scoped lang="less">
@import url('~@/styles/mixin.less');
@import url('~@/styles/var.less');
.home-container{
  width: 100%;
  height: 100%;
  position: relative;
  ul{
    transition: 1500ms;
    list-style: none;
  };
  overflow: hidden;
}
.icon{
  color:white;
  position: absolute;
  @gap:20px;
  font-size: 50px;
  font-weight: 300;
  transform: translateX(-50%);
  cursor: pointer;
  &.iconUp{
    left: 50%;
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.iconDown{
    left: 50%;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }

  @jump:3px;
@keyframes jump-up{
  0%{
    transform: translate(-50%,@jump);
  }
  50%{
    transform: translate(-50%,-@jump);
  }
  100%{
    transform: translate(-50%,@jump);
  }
}
@keyframes jump-down{
  0%{
    transform: translate(-50%,-@jump);
  }
  50%{
    transform: translate(-50%,@jump);
  }
  100%{
    transform: translate(-50%,-@jump);
  }
}
}
.indicator{
  position: absolute;
  
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  li{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-bottom: 8px;
    background:@dark ;
    border: 1px solid black;
    cursor: pointer;
    &.active{
      background: white;
      cursor: default;
      box-shadow:0 0 5px 2px blueviolet;
    }
  }
}

.banners{
  width: 100%;
  height: 100%;
  li{
    width: 100%;
    height: 100%;
    
  }
}
</style>