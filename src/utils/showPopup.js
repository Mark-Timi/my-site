import Icon from '@/components/Icon'
import getRealDom from './getRealDom';
import Style from './showPopup.module.less'


/**
 * 
 * @param {HTMLElement} container 
 * @param {String} type   //info danger success warn
 * @param {String} message
 * @param {Number} duration 
 */
function showPopup(message='hello world',type='danger',duration='2000',container){
    if(!container){
        container=document.body
    }

    
    
    const iconDom=getRealDom(Icon,{type});
    const div=document.createElement('div');
    div.classList.add('canvas');
    div.innerHTML=/*html*/
     `
        <div>
        ${iconDom.outerHTML}
        </div>   
     <div>${message}</div>
    `;
    div.className=Style.message
    div.classList.add(Style[`message-${type}`])

    container.appendChild(div)
    
    div.style.transform='translate(-50%, -50%) translateY(20px)';
    //浏览器强行渲染
    div.clientHeight;

    div.style.transform='translate(-50%, -50%)';
    div.style.opacity=1;


    setTimeout(()=>{
        div.style.transform='translate(-50%, -50%) translateY(-10px)';
        div.style.opacity=0;
        div.addEventListener('transitionend',()=>{
            div.remove();
        },{once:true})
    },duration)


    


    if(getComputedStyle(container).position==='static'){
        container.style.position='relative'
    }
}




export default showPopup



