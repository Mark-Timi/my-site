<template>
  <div class="blog-container">
      <h1>blog</h1>
      <RightList :list="list"></RightList>
      
  </div>

</template>

<script>
import RightList from './components/RightList.vue';
export default {
  components:{RightList},
  data(){
    return{
      list: [
        { name: "a", isSelect: true },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            {
              name: "c-2",
              isSelect: false,
              children: [
                { name: "c-2-1", isSelect: false },
                { name: "c-2-2", isSelect: false },
                { name: "c-2-3", isSelect: false },
                { name: "c-2-4", isSelect: false },
              ],
            },
            { name: "c-3", isSelect: false },
            { name: "c-4", isSelect: false },
          ],
        },
        { name: "d", isSelect: false },
      ],
    }
  }
}
</script>

<style>

</style>