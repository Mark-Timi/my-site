<template>
  <nav class="menu-container">
    <RouterLink v-for="item in items" :exact="item.exact" class="item" :key="item.link" :to="{name:item.name}" active-class="active" exact-active-class="">
      <div>
        <Icon :type="item.iconType" class="icon"></Icon>
      </div>
      <span>{{ item.text }}</span>
    </RouterLink>
  
  </nav>
</template>

<script>
import Icon from '@/components/Icon'
export default {
    components:{
        Icon
    },
    data(){
      return{
        items:[
          {
            iconType:'home',
            text:'首页',
            name:'home',
            exact:true
          },
          {
            iconType:'blog',
            text:'文章',
            name:'blog',
            exact:false
          },
          {
            iconType:'about',
            text:'关于我',
            name:'about',
            exact:true
          },
          {
            iconType:'code',
            text:'项目&效果',
            name:'project',
            exact:true
          },
          {
            iconType:'message',
            text:'留言板',
            name:'message',
            exact:true
          }
        ]
      }
    },
    
    
}
</script>

<style scoped lang="less">
.item{
  border-radius: 10px;
  display: flex;
  height: 60px;
  padding: 10px 30px;
  align-items: center;
  .icon{
    margin-right: 5px;
  }
  &.active{
    background: rgba(128, 128, 128, 0.4);
  }
  
}
</style>