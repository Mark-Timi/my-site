<template>
  <div class="image-loader-container">
    <img :src=placeholder v-if="!originFull" class="placeholder">
    <img :src=src @load="handleLoad" :style="{ opacity: originOpacity,transition:duration+'s' }" class="origin">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      originLoaded: false,
      originFull:false
    }
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    }
  },
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default:'https://i.pinimg.com/474x/d9/f0/40/d9f040b713c7082d86a3513a23a6225d.jpg'
    },
    duration:{
      type:Number,
      required:false,
      default:3
    }
  },
  methods: {
    handleLoad() {
      this.originLoaded=true;
      setTimeout(()=>{
        this.originFull=true;
        this.$emit('load', '图片OK了兄弟');
      },this.duration*1000)
      
    }
  }
}
</script>

<style scoped lang="less">
@import url('~@/styles/mixin.less');



.image-loader-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
    &.placeholder {
      filter: blur(2vw);
      overflow: hidden;
    }

    &.origin {
      opacity: 0;
    }
  }
}
</style>