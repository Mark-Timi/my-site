<template>
    <div class="empty-container">
      <div>
          <Icon type="empty"></Icon>
      </div>
      <p style="text-align: center;">{{ text }}</p>
    </div>
  </template>
  
  <script>
  import Icon from '../Icon'
  export default {
      components:{
          Icon
      },
      props:{
          text:{
              type:String,
              default:'无数据'
          }
      }
  }
  </script>
  
  <style scoped lang="less">
  @import url('~@/styles/mixin.less');
  .icon-container{
      font-size: 100px;
  }
  .empty-container{
      text-align: center;
      .self-center(absolute);
  }
  </style>