<template>
    <i class="iconfont icon-container" :class="realClass"></i>
</template>

<script>
const classMap={
    empty:'icon-kong',
    arrowDown:'icon-arrow-down',
    arrowUp:'icon-arrowup',
    github:'icon-github-fill',
    wechat:'icon-weixin',
    qq:'icon-qq',
    mail:'icon-youxiang',
    home:'icon-shouye',
    blog:'icon-gangbi',
    about:'icon-guanyu',
    code:'icon-code',
    message:'icon-liuyan',
    info:'icon-xinxi',
    danger:'icon-weixian',
    success:'icon-chenggong',
    warn:'icon-jinggao',
}
export default {
    props:{
        type:{
            type:String,
            required:true
        }
    },
    computed:{
        realClass(){
            return classMap[this.type]
        }
    },
}
</script>


<style lang="less" scoped>
@import url('//at.alicdn.com/t/c/font_4555533_jqw8gny6dxs.css');
i{
    font-size: inherit;
}
</style>
