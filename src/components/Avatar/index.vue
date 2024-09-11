<template>
  <img class="avatar-container" :src="url" :style="{ height: size + 'px',width:size+'px' }"  style="border-style: dashed;"/>
</template>
  
<script>
export default {
  props: {
    url: {
      type: String,
      default:
        "https://i.pinimg.com/474x/1d/81/21/1d81216394b2eef725f7a3d6530441c2.jpg",
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>
  
<style lang="less" scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  
}
</style>