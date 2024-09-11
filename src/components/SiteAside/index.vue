<template>
  <div class="site-aside-container">
    <div class="avatar">
        <Avatar></Avatar>
    </div>
    <h1 style="text-align: center;">包子</h1>
    <Menu></Menu>
    <Contact></Contact>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import Menu from './Menu'
import Contact from './Contact'
export default {
    components:{
        Avatar,Menu,Contact
    }
}
</script>

<style lang="less" scoped>
.site-aside-container{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: transparent;
}
.avatar{
    text-align: center;
    margin: 5px 0;
}
</style>

