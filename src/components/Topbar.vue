<template>
   <div id="topbar">
       <div class="logo">
         <img src="https://ooo.0o0.ooo/2017/08/04/59841e858990d.png"/>
         <span>在线简历</span>
       </div>
   </div>
 </template>
 
 <script>
 
 export default {
   name: 'Topbar'
 }
 </script>
 
 <style lang="scss" scoped>
  #topbar {
    background:#fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    >.logo {
      font-size:22px;
      color:#0d331f;
      >img {
        width:50px;
        height:45px;
        margin-left: .2em;
        vertical-align: middle;
      }
    }
  }
 </style>