<template>
  <ul class="right-list-container" v-if="list.length>0">
      <li v-for="(item,index) in list" :key="index">
        <span  :class="{active:item.isSelect}">{{ item.name }}</span>
        <RightList :list="item.children"></RightList>
      </li>
  </ul> 
  
</template>

<script>
export default {
    name:'RightList',
    props:{
        list:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>

<style scoped lang="less">
.right-list-container {
  .right-list-container {
    margin-left: 100px;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    // cursor: pointer;
    .active {
      color: green;
      font-weight: bold;
    }
  }
}
</style>