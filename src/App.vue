<template>
  <div class="app-container">
    <Layout>


      <template #left>
        <div class="left"> 
          <SiteAside></SiteAside>
        </div>
      </template>

      <div class="main">
        <RouterView/>
      </div>

      




    </Layout>
  </div>
</template>

<script>
import SiteAside from '@/components/SiteAside'
import Layout from '@/components/Layout'



export default {
  components: {
    Layout,SiteAside
  }
}
</script>

<style scoped lang="less">
@import url('~@/styles/mixin.less');
.app-container {
  // margin: 0 auto;
  // .self-fill();
  
  height: 100vh;
  width: 100vw;
}
.left{
  width: 350px;
  height: 100%;
}
.main{
  height: 100%;
}

</style>