<template>
    <div class="pager-container" v-if="pageNumber>1">
        <a :class="{disabled:current===1}" @click="handlePageChange(1)">|&lt;&lt;</a>
        <a :class="{disabled:current===1}" @click="handlePageChange(current-1)">&lt;</a>


        <a v-for="(n,index) in numbers" :key="index" :class="{active:n===current}" @click="handlePageChange(n)">{{ n }}</a>
        


        <a :class="{disabled:current===pageNumber}" @click="handlePageChange(current+1)">&gt;</a>
        <a :class="{disabled:current===pageNumber}" @click="handlePageChange(pageNumber)">&gt;&gt;|</a>
        <br/>
        当前页:{{ current }}
        最小页:{{ minPage }}
        
    </div> 
</template>

<script>
export default {
    props:{
        current:{
            type:Number,
            default:1
        },
        limit:{
            type:Number,
            default:10
        },
        total:{
            type:Number,
            default:0
        },
        visibleNum:{
            type:Number,
            default:10
        }
    },
    computed:{
        pageNumber(){
            return(Math.ceil(this.total/this.limit));
        },
        numbers(){
            let numbers=[];
            for(let i=this.minPage;i<=this.maxPage;i++){
                numbers.push(i);
            }
            return numbers;
        },
        minPage(){
            const tmp=this.current-Math.floor(this.visibleNum/2);
            if(tmp<1){
                return 1;
            }
            return tmp;

        },
        maxPage(){
            const tmp=this.minPage+this.visibleNum-1;
            if(tmp>this.pageNumber){
                return this.pageNumber;
            }
            return tmp;
        }
    },
    methods:{
        handlePageChange(newPage){
            if(newPage<1){
                newPage=1
            }
            if(newPage>this.pageNumber){
                newPage=this.pageNumber
            }
            if(newPage==this.current){
                return
            }
            
            this.$emit('changePage',newPage)
        }
    }
    
}
</script>


<style lang="less" scoped>
@import url('~@/styles/var.less');
.pager-container{
    display: flex;
    justify-content: center;
    color: @primary;
    a{
        cursor: pointer;
        margin: 0 7px;
        &.disabled{
            cursor: not-allowed;
        }
        &.active{
            color: @words;
            cursor:text;
        }
    }
}
</style>