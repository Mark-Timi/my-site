import style from './loading.module.less'
import loadingUrl from '@/assets/img/loading.svg'

function isContainImg(el){
    return el.querySelector('img[data-role=loading]');
}

function createImg(el){
    const imgDom=document.createElement('img');
    imgDom.src=loadingUrl
    imgDom.dataset.role='loading';
    imgDom.classList.add(style.loading)
    el.appendChild(imgDom)
    
}


export default function(el,binding){
    const imgDom=isContainImg(el);
    if(binding.value){
        if(!imgDom){
            //创建img
            createImg(el)
        }
    }
    else{
        if(imgDom){
            imgDom.remove();
        }
    }
    
}
