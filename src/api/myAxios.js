import axios from "axios";
import { showPopup } from "@/utils";

const myAxios=axios.create()

myAxios.interceptors.response.use(function (response) {
    if(response.data.code!=0){
        showPopup(response.data.msg)
    }
    else{
        return response.data.data
    }
  });

export default myAxios