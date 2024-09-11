



function mixin(remoteData=[]){
    
    
   
    return {
        data(){
            return{
                isLoading:true,
                remoteData
            }
        },
        async created(){
            this.remoteData=await this.fetchData();
            this.isLoading=false
        }
        
    }
}
export default mixin