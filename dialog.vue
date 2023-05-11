<script setup>
import { ref } from 'vue';
import {root,obj,close} from './setData'

const exic = () =>{
}
const subimit = ()=>{
  obj.value.subimit.fn()
  close()
}

  
</script>
<template>
  <div class="masking" @click.self="close()">
    <div class="dialog" >
    <div class="content">
      <div class="line1" >
        <div>{{ obj.title }}</div>
        <div @click="close()">×</div>
      </div>
      <div class="line2">{{ obj.content }}</div>
      <div class="line3" >
        <div class="line3Left"  @click="close()">{{ obj.close.title }}</div>
        <div class="line3Right" @click="subimit">{{ obj.subimit.title }}</div>
      </div>
    </div>
  </div>
  </div>
  
</template>

<style scoped>

  .masking{
    width: 100%;
    height: 100%;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(128, 128, 128, 0.5);
  }

  .dialog{
    width: 350px;
    height: 120px;
    border-radius:3px ;
    padding: 12px 25px;
    box-sizing: border-box;
    background: #fff;
    margin: auto;  
    margin-top:200px;  
    animation: slidein 0.3s 1 ;
  }

  @keyframes slidein {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .content{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }

  .line1{
    display:flex;
    justify-content: space-between;
  }

  .line2{
    margin: 3px 0 ;
    height:55%;
    font-size: 13px;
  }
  .line3{
    display:flex;
    justify-content: right;
  }
  .line3 div{
    padding: 2px 5px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    border-radius:3px ;
    font-size: 12px;
    cursor:pointer

  }
  .line3Left{
    margin-right:10px ;
    background-color: #fff;
    border: 1px solid gainsboro;
  }
  .line3Right{
    border: 1px solid rgb(24, 160, 88);

    background-color: rgb(24, 160, 88);
    color: #fff;
  }
</style>
