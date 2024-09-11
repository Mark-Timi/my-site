import myAxios from "./myAxios";


export function getBanner(){
    return myAxios.get('/api/banner');
}







