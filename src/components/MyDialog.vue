<template>
   <div class="wrapper" v-show="visible">
     <div class="dialog">
       <header>
         {{title}}
         <span class="close" @click="close">X</span>
       </header>
       <main>
         <slot></slot>
       </main>
     </div>
   </div>
 </template>
 
 <script>
 
 export default {
   name: 'MyDialog',
   props: ['title','visible'],
   methods: {
     close(){
       this.$emit('close')
     }
   }
 }
 </script>
 
<style lang="scss" scoped>
   .wrapper{
     position: fixed;
     background: hsla(0, 0%, 0%, .35);
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     margin: 0;
     display: flex;
     justify-content: center;
     align-items: center;
     z-index: 100000;
   }
   .dialog {
     background: #fff;
     min-height: 5em;
     min-width: 15em;
     box-shadow:0 1px 3px 0 rgba(0,0,0,0.35);
     > header {
       padding: 1em;
       display: flex;
       justify-content: space-between;
       border: 1px solid #0d331f;
       background: #0d331f;
       color: #fff;
       > .title {
         width: 100%;
         margin: 0 auto;
         font-size: 1.5em;
         text-align: center;
       }
       > .close {
         cursor: pointer;
         margin-top: .3em;
       }
     }
     > main {
       padding: 2em;
     }
   }
 </style>