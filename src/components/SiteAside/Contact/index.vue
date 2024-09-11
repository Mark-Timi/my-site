<template>
  <ul class="contact-container">
    <li>
      <a>
        <div class="icon">
          <Icon type="github"/>
        </div>
        <span>github.com/Mark-Timi</span>
      </a>
      <div class="pop">
        <img src="https://i.pinimg.com/474x/f4/47/79/f44779bcedd3544db85017a930caa719.jpg" alt="">
      </div>
    </li>


    <li>
      <a href="mailto:woodyzone402@gmail.com">
        <div class="icon">
          <Icon type="mail"/>
        </div>
        <span>woodyzone402@gmail.com</span>
      </a>
      
    </li>

    <li>
      <a>
        <div class="icon">
          <Icon type="wechat"/>
        </div>
        <span>LZZEERF</span>
      </a>
      
    </li>

    <li>
      <a>
        <div class="icon">
          <Icon type="qq"/>
        </div>
        <span>1466034796</span>
      </a>
      <div class="pop">
        <img src="https://i.pinimg.com/474x/4e/12/db/4e12dbcccd5f3d80971bfc56d194c15c.jpg" alt="">
      </div>
      
    </li>

    
  </ul>

</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: {
    Icon
  }
}
</script>

<style scoped lang="less">
.contact-container {
  list-style: none;
  padding: 20px;
  li{
    background: transparent;
    @itemHeight:30px;
    position: relative;
    margin-bottom: 10px;
    a{
      display: flex;
      height: @itemHeight;
      line-height: 30px;
      cursor: pointer;
      .icon{
        margin-right: 10px;
      }
      &:hover{
        +.pop{
          transform: scaleY(1);
        }
      }
    }
    .pop{
      border:1px solid ;
      transition: 0.3s;
      transform: scaleY(0);
      transform-origin: center bottom;
      background: white;
      position: absolute;
      bottom: @itemHeight+5px;
      border-radius: 5px;
      padding: 5px 10px;
      img{
        width: 150px;
        height: 150px;
      }
      &::after{
        border-bottom: 1px solid ;
        border-right: 1px solid ;
        content: "";
        height: 10px;
        width: 10px;
        background: red;
        position: absolute;
        left: 50%;
        bottom: -5px;
        transform: translateX(-50%) rotate(45deg);
        background: white;
      }
    }
  }
}
</style>