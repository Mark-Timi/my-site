import Vue from 'vue'


export default function(compontent,props){
    const vm=new Vue({
        render:(h)=>h(compontent,{
            props
        })
    });
    vm.$mount('')
    return vm.$el;
}