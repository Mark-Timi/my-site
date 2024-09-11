<template>
  <div id="app">
    hello
    <!-- <Pager :total="101" :current="current" @changePage="handleChange"></Pager> -->
  </div>
</template>
  
<script>
import Pager from "./index";
export default {
  name: "App",
  data() {
    return {
      current: 1,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handleChange(e) {
      console.log(e);
      this.current = e;
    },
  },
};
</script>
  
<style lang="less" scoped>
</style>
  